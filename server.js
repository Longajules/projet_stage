const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Sert tous les fichiers du dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// Route principale (optionnelle car Express sert déjà index.html automatiquement)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});