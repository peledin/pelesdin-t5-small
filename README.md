# Web Interface für FLAN-T5-Small 

Dieses Projekt stellt eine Web-Oberfläche für das FLAN-T5-Small-Modell von Google zur Verfügung. Mit dieser Anwendung können Benutzer verschiedene Aufgaben wie Übersetzungen, Berechnungen und Fragen durchführen.

## Anforderungen

- Python 3.7 oder höher
- Flask
- Transformers

## Installation

1. Erstelle eine virtuelle Umgebung und aktiviere sie:

```bash
python3 -m venv venv
source venv/bin/activate
```

2. Installiere die benötigten Pakete:

```venv
pip install -r requirements.txt
```

## Benutzung

1. Starte die Flask-Anwendung:

```venv
python app.py
```

2. Öffne deinen Webbrowser und navigiere zur folgenden URL: http://localhost:8000

3. Gib den gewünschten Text in das Eingabefeld ein und klicke auf "Generate", um das Modell auszuführen und die generierte Antwort anzuzeigen.

## Lizenz und Nutzung

Für weitergehende Informationen bezüglich der Nutzung von Flan-T5 besuche das Orginial-Repo: https://github.com/google-research/t5x