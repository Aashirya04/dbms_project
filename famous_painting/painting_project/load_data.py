import pymysql
import pandas as pd

conn = pymysql.connect(
    host="localhost",
    user="test",
    password="HiThere@789!",
    database="painting_db"
)

cursor = conn.cursor()

# File paths
csv_files = {
    "museum_hours": "csv_datasets/cleaned_museum_hours.csv",
    "product_size": "csv_datasets/cleaned_product_size.csv",
    "subject": "csv_datasets/cleaned_subject.csv",
    "work": "csv_datasets/cleaned_work.csv"
}

# Load data function
def load_data(table, file):
    df = pd.read_csv(file)
    columns = ", ".join(df.columns)
    placeholders = ", ".join(["%s"] * len(df.columns))
    query = f"INSERT IGNORE INTO {table} ({columns}) VALUES ({placeholders})"

    for _, row in df.iterrows():
        cursor.execute(query, tuple(row))
    conn.commit()

# Insert data into MySQL
for table, file in csv_files.items():
    load_data(table, file)

print("Data successfully inserted!")

cursor.close()
conn.close()
