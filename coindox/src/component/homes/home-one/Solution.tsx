"use client";

import React, { useState } from "react";
import Papa from "papaparse";


// Define the type for a row of CSV data
type CsvRow = { [key: string]: string };

// Define type for wallet entry
type WalletEntry = {
  address: string;
  isActive: boolean;
};

const Solution: React.FC = () => {
  // State declarations
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [wallets, setWallets] = useState<WalletEntry[]>([{ address: "", isActive: true }]);
  const [fileName, setFileName] = useState<string>("");

  // Handle CSV file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".csv")) {
      setFileName(file.name);
      readCSV(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  // Parse CSV file with error handling
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

  // Update wallet address
  const handleWalletChange = (index: number, value: string) => {
    const newWallets = [...wallets];
    newWallets[index].address = value;
    setWallets(newWallets);
  };

  // Toggle wallet active state
  const handleCheckboxChange = (index: number) => {
    const newWallets = [...wallets];
    newWallets[index].isActive = !newWallets[index].isActive;
    setWallets(newWallets);
  };

  // Add a new wallet field
  const addWalletField = () => {
    setWallets([...wallets, { address: "", isActive: true }]);
  };

  // Remove a wallet field if more than one exists
  const removeWalletField = (index: number) => {
    if (wallets.length > 1) {
      setWallets(wallets.filter((_, i) => i !== index));
    }
  };

  // Handle form submission with validation
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
    console.log("Submitted Data:", { csvData, activeWallets });
    alert("Form submitted! Check console for data.");
  };

  return (
    <div style={styles.container}>
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
              backgroundColor: wallet.isActive ? "#fff" : "#f0f0f0",
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
      <div>Output</div>
      {csvData.length > 0 && (
        <div style={styles.tableContainer}>
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
    </div>
  );
};

// Styles object with enhancements
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center" as const,
    backgroundImage: "url(public/assets/img/shape/s_circle_4.png)", // Replace with your optimized image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
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
  table: {
    borderCollapse: "collapse" as const,
    width: "auto",
    maxWidth: "90%",
  },
  tableHeader: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "8px",
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
};

export default Solution;