import pandas as pd

# Read the CSV file
df = pd.read_csv('data/descriptors.csv')

# Convert the DataFrame to JSON
json_data = df.to_json(orient='records', lines=True)

# Write the JSON data to a file
with open('data.json', 'w') as file:
    file.write(json_data)
