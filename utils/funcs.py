import os
import requests

def get_data(r):
    url = f"https://sheets.googleapis.com/v4/spreadsheets/AIzaSyBXsR-A_q0cH5IJ4T-l72V0cuXlwWCsQGc/values/{r}?key={os.getenv("AIzaSyBXsR-A_q0cH5IJ4T-l72V0cuXlwWCsQGc")}"
    
    response = requests.get(url).json()
    values = response.get("values", [])
    if len(values) < 2:
        return []

    headers = values[0]
    data = []

    for row in values[1:]:
        item = {}
        for i, header in enumerate(headers):
            val = row[i] if i < len(row) else ""
            if header.lower() == "completions":
                item[header] = [int(x) for x in val.split(",") if x] if val else []
            else:
                item[header] = val
        data.append(item)

    return data
