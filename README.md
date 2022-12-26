# Symposium Labs

A decentralized web application using ReactJS, Flask, Solidity, IPFS and the Ethereum Blockchain to store and view all research papers securely.

## About the D-App

<b>The app has 2 main users:</b>
1. Researcher
2. Collaborators <i>(in development)</i>

<b>Researchers can:</b>
<ol>
<li> Upload a document to the blockchain. The document is added as a node in IPFS which returns a hash. The hash is then stored on the blockchain</li>
<li> View the uploaded documents.</li>
<li> Analyse the uploaded documents. The text from the document is extracted and <b>NER</b>(Named Entity Recognition) is performed on the text
<li> Analyse their reports to find keywords
<li> Add a trusted researcher to view their research documents.</li>
</ol>

<b>Collaborators can:</b>
<ol>
<li> Upload a research document for a certain researcher to the blockchain.</li>
<li> View a certain researchers's uploaded document.</li>
</ol>

## System Architecture

TO DO

| Number      | Description |
| ----------- | ----------- |
| 1           | Researcher scans and uploads a research record.       |
| 2      | The record is then encrypted from the client side and sent to the Flask Server.        |
| 3, 4           | The Flask server sends this encrypted file to the IPFS network for storage. Once stored, it returs back a file hash.       |
| 5       | The file hash is then returned back to the client app.        |
| 6        | The hash is then stored securely on the Ethereum Blockchain        |
| 7          | The user can then choose to perform NER(Named-Entity-Recognition) on the data in the research paper. This is the make the user aware about the complex terms and data in the report. The record is sent to the Flask server.       |
| 8, 9        | The Flask server runs performs OCR on the report to get the text from the scanned research paper. The conevrted research paper is then passed back to the Flask server.        |
| 10 | The Flask server sends this data back to the client app and the client can view the keywords and click on it for more information |
| 11           | The collaborators can view the research papers record(s) of <b>ONLY his/her</b> collaborator.      |

## About the Ethereum Blockchain

<img src="https://camo.githubusercontent.com/d33e4396449fee9f80e57435ae3e77d7d45b34b1a90b72c578c9a456685c4c8c/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763534d61425a4a2d56466e444b625562444b4a664949466867596842765648315f6544744126757371703d434155" height="260px" width="360px"/>

<b>Ethereum</b> is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.

## About the InterPlanetary File System(IPFS)

<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" height="330px" width="360px"/>

The <b>InterPlanetary File System</b> is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.

## Dependencies
<ul>
  <li>React.js</li>
  <li>Web3.js</li>
  <li>Ganache-cli</li>
  <li>Truffle</li>
  <li>Solidity</li>
  <li>Metamask</li>
  <li>Flask</li>
  <li>Ipfs</li>
  <li>Pytesseract</li>
</ul>


## Getting Started

### Clone the repository
```bash
git clone https://github.com/michael0402/symposiumlabs.git
```

### To run React development server

```bash
cd blockchain
npm install
npm start
```

### To run Flask server
<ul><li>First start IPFS daemon</li></ul>

```bash
cd server
python app.py
```
## Working Demonstration

TO DO
