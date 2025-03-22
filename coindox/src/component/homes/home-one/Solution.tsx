"use client";

import React, { useState } from "react";
import Papa from "papaparse";
import { getVaultContract } from "../../../../../web3 constants/web3 constants";
import { ethers } from "ethers";
import { Eip1193Provider } from "ethers";

declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}

type CsvRow = { [key: string]: string };
type WalletEntry = { address: string; isActive: boolean };
type TransactionRow = {
  transactionHash: string;
  profit: string;
  taxesDue: string;
};

const Solution: React.FC = () => {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [wallets, setWallets] = useState<WalletEntry[]>([{ address: "", isActive: true }]);
  const [fileName, setFileName] = useState<string>("");
  const [transactionData, setTransactionData] = useState<TransactionRow[]>([]);
  const [view, setView] = useState<"input" | "results">("input");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".csv")) {
      setFileName(file.name);
      readCSV(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const readCSV = (file: File) => {
    Papa.parse(file, {
      complete: (result) => {
        if (result.errors.length > 0) {
          alert(`Error parsing CSV: ${result.errors[0].message}`);
        } else {
          setCsvData(result.data as CsvRow[]);
        }
      },
      header: true,
    });
  };

  const handleWalletChange = (index: number, value: string) => {
    const newWallets = [...wallets];
    newWallets[index].address = value;
    setWallets(newWallets);
  };

  const handleCheckboxChange = (index: number) => {
    const newWallets = [...wallets];
    newWallets[index].isActive = !newWallets[index].isActive;
    setWallets(newWallets);
  };

  const addWalletField = () => {
    setWallets([...wallets, { address: "", isActive: true }]);
  };

  const removeWalletField = (index: number) => {
    if (wallets.length > 1) {
      setWallets(wallets.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = () => {
    const activeWallets = wallets.filter(wallet => wallet.isActive).map(wallet => wallet.address.trim());
    if (activeWallets.length === 0) {
      alert("Please add at least one active wallet address.");
      return;
    }
    if (activeWallets.some(address => address === "")) {
      alert("Please enter all active wallet addresses.");
      return;
    }

    const mockTransactions: TransactionRow[] = activeWallets.map((address, index) => ({
      transactionHash: `0x${Math.random().toString(16).slice(2, 10)}...${index}`,
      profit: `${(Math.random() * 1000).toFixed(2)} NZD`,
      taxesDue: `${(Math.random() * 200).toFixed(2)} NZD`,
    }));

    setTransactionData(mockTransactions);
    setView("results");
    console.log("Submitted Data:", { csvData, activeWallets, transactionData: mockTransactions });
  };

  const handleBack = () => {
    setView("input");
  };

  const handlepay = async (_amount: string) => {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = await getVaultContract(signer);
      const parsedAmount = ethers.parseUnits(_amount, 6);
      const tx = await contract.deposit(parsedAmount);
      await tx.wait();
      alert(`Payment successful! TX hash: ${tx.hash}`);
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div style={styles.container}>
      {view === "input" ? (
        <>
          <h2 style={styles.heading}>Upload CSV File</h2>
          <input type="file" accept=".csv" onChange={handleFileChange} />
          {fileName && <p style={styles.fileName}>Uploaded file: {fileName}</p>}

          <h3 style={styles.subHeading}>Enter Crypto Wallet Addresses</h3>
          {wallets.map((wallet, index) => (
            <div key={index} style={styles.walletRow}>
              <label style={styles.label} htmlFor={`wallet-${index}`}>
                Wallet {index + 1}:
              </label>
              <input
                type="checkbox"
                checked={wallet.isActive}
                onChange={() => handleCheckboxChange(index)}
                style={styles.checkbox}
                aria-label={`Toggle active for wallet ${index + 1}`}
              />
              <input
                type="text"
                id={`wallet-${index}`}
                value={wallet.address}
                onChange={(e) => handleWalletChange(index, e.target.value)}
                placeholder="e.g., 0x1234...abcd"
                style={{
                  ...styles.walletInput,
                  backgroundColor: wallet.isActive ? "#fff" : "#d3d3d3",
                  color: "#000",
                }}
                disabled={!wallet.isActive}
              />
              {wallets.length > 1 && (
                <button onClick={() => removeWalletField(index)} style={styles.removeButton}>
                  ×
                </button>
              )}
            </div>
          ))}
          <button onClick={addWalletField} style={styles.addButton}>
            Add Another Wallet
          </button>

          {csvData.length > 0 && (
            <div style={styles.tableContainer}>
              <h3 style={styles.subHeading}>CSV Data</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((header, index) => (
                      <th key={index} style={styles.tableHeader}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((cell, cellIndex) => (
                        <td key={cellIndex} style={styles.tableCell}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button onClick={handleSubmit} style={styles.submitButton}>
            Submit
          </button>
        </>
      ) : (
        <>
          {transactionData.length > 0 && (
            <div style={styles.fullWidthTableContainer}>
              <h3 style={styles.subHeading}>Transaction Summary</h3>
              <table style={styles.fullWidthTable}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Transaction Hash</th>
                    <th style={styles.tableHeader}>Profit</th>
                    <th style={styles.tableHeader}>Taxes Due</th>
                    <th style={styles.tableHeader}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((row, index) => (
                    <tr key={index}>
                      <td style={styles.tableCell}>{row.transactionHash}</td>
                      <td style={styles.tableCell}>{row.profit}</td>
                      <td style={styles.tableCell}>{row.taxesDue}</td>
                      <td style={styles.tableCell}>
                        <button
                          onClick={() => {
                            const taxOnly = parseFloat(row.taxesDue.replace(/[^\d.-]/g, ""));
                            handlepay(taxOnly.toString());
                          }}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          Pay Tax
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <button onClick={handleBack} style={styles.backButton}>
            Back to Input
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center" as const,
    backgroundImage: "url('/assets/img/shape/s_circle_4.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    width: "100%",
  },
  heading: {
    marginBottom: "20px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
  },
  subHeading: {
    marginTop: "20px",
    marginBottom: "10px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
  },
  walletRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    marginRight: "10px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
  },
  walletInput: {
    padding: "8px",
    width: "300px",
    maxWidth: "90%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginLeft: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",
    fontSize: "16px",
  },
  checkbox: {
    marginRight: "10px",
  },
  addButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    marginLeft: "10px",
    padding: "2px 8px",
    backgroundColor: "#ff4444",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
  },
  fileName: {
    color: "#fff",
    marginTop: "10px",
  },
  tableContainer: {
    marginTop: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
    borderRadius: "8px",
    overflowX: "auto" as const,
  },
  fullWidthTableContainer: {
    marginTop: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
    borderRadius: "8px",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  table: {
    borderCollapse: "collapse" as const,
    width: "auto",
    maxWidth: "90%",
  },
  fullWidthTable: {
    borderCollapse: "collapse" as const,
    width: "100%",
    tableLayout: "fixed" as const,
  },
  tableHeader: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "8px",
    wordBreak: "break-word" as const,
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Solution;
