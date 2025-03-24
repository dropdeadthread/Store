import json

# Load the existing Gatsby products JSON file
input_file = "src/data/gatsby_products.json"  # Adjust the path if needed
output_file = "src/data/products.json"

try:
    with open(input_file, "r", encoding="utf-8") as file:
        products = json.load(file)  # Load JSON file as a list of products

    # Transform each product to match the required structure
    formatted_products = []
    for product in products:
        formatted_product = {
            "handle": product.get("Handle", "").lower().replace(" ", "-"),
            "title": product.get("Title", "Untitled Product"),
            "body_html": product.get("Body", "No description available."),
            "image": {
                "src": product.get("ImageSrc", "https://example.com/default-image.jpg")  # Provide a default image if missing
            },
            "variants": [
                {
                    "price": product.get("Price", "0.00")  # Default to "0.00" if price is missing
                }
            ]
        }
        formatted_products.append(formatted_product)

    # Save the fixed JSON file
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(formatted_products, file, indent=4)

    print(f"✅ Successfully created {output_file} with {len(formatted_products)} products.")

except Exception as e:
    print(f"❌ Error processing JSON: {e}")
