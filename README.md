# unique-id-js

A lightweight and efficient unique numeric ID generator for Node.js applications.

## Features

- Generates unique numeric IDs
- Combines random numbers with timestamps for guaranteed uniqueness
- Zero dependencies
- Simple and easy to use

## Installation

```bash
npm install unique-id-js
```

## Usage

```javascript
const getId = require("unique-id-js");

// Generate a unique ID
const id = getId();
console.log(id); // Example output: 1231234567890
```

## How it Works

The generated ID is a combination of:

- A random 3-digit number (padded with zeros)
- Current timestamp

This combination ensures that:

1. IDs are always numeric
2. Each ID is unique
3. IDs are sortable by creation time
4. The format is consistent and predictable

## Example Output

The generated IDs will look like this:

```
1231234567890
4561234567891
7891234567892
```

## License

ISC

## Author

Prem Jadhav

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.
