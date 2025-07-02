from google.oauth2 import service_account
from googleapiclient.discovery import build
import os
import requests
from dotenv import load_dotenv
load_dotenv()
import time

creds = service_account.Credentials.from_service_account_file("service.json", scopes=["https://www.googleapis.com/auth/spreadsheets"])
service = build('sheets', 'v4', credentials=creds)
sheet = service.spreadsheets()

SHEET_ID = "1l0ciw6ZWTA9TbmyPq_zP2j5NUBV9b2W3SOpWYcpqcV0"

response = requests.get(f"https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/backup!A:A?key={os.getenv('GOOGLE_SHEETS_API_KEY')}")
names = response.json().get("values", [])

ids = []
for name in names:
    if not name or not name[0].strip():
        break
    
    user = name[0]
    response = requests.post("https://users.roblox.com/v1/usernames/users", json={"usernames": [user]})
    id = response.json()["data"][0]["id"]
    ids.append([id])
    
    print(user, id)
    time.sleep(0.1)

sheet.values().update(
    spreadsheetId=SHEET_ID,
    range="backup!B:B",
    valueInputOption="RAW",
    body={"values": ids}
).execute()
