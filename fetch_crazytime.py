import json
import requests
from datetime import datetime, timezone

URL = "https://api.tracksino.com/crazytime_history?filter=&page_num=1&per_page=100&period=24hours&table_id=8&sort_by=&sort_desc=false"

TOKEN = "b8f11ee0-70ec-419f-91b0-76fac8714a14"

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Origin": "https://tracksino.com",
    "User-Agent": "Mozilla/5.0"
}

r = requests.get(URL, headers=headers, timeout=30)
r.raise_for_status()

payload = r.json()

output = {
    "updated_at": datetime.now(timezone.utc).isoformat(),
    "source": "tracksino",
    "rows": payload.get("data", []),
    "count": payload.get("count", 0)
}

with open("data/latest.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)

print("Saved data/latest.json")
