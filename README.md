# JavaScript Reference and Output

This directory contains examples of different methods for referencing and manipulating DOM elements using JavaScript. Each file demonstrates a specific approach or concept.

## Files

### `CSS_selectors.htm`
Demonstrates how to reference DOM elements using CSS selectors.
- Uses `document.querySelector()` to find elements by class name (`.register-button`), attribute selectors (`img[name="poster"]`), and tag structure.
- Uses `document.getElementById()` for direct ID lookup.
- Shows modifying element styles (e.g., `borderRadius`) and values.

### `DOM_hierarchy.htm`
Demonstrates how to access DOM elements using the document's hierarchy collections.
- Accesses elements via built-in collections like `document.images[]` and `document.forms[]`.
- Uses index-based access (e.g., `forms[0].elements[0]`) rather than IDs or Names.
- Useful for understanding the structure of the DOM tree.

### `ID_reference.htm`
Focuses on referencing elements strictly by their `id` attribute.
- Uses the standard `document.getElementById("id")` method.
- Shows how to access and modify values of input elements.
- This is the most common and generally recommended way to target specific unique elements.

### `Name_Reference.htm`
Demonstrates referencing elements using the `name` attribute.
- Utilizes the feature where elements with `name` (or `id`) attributes are accessible as properties of the global `window` object or document collections.
- Examples: accessing `poster` directly for an image with `name="poster"`, or `fromlogin.formsumbit` for nested form elements.
- Note: This approach relies on legacy behavior and direct named access, which is less explicit than `querySelector` or `getElementById`.

## Usage
Open any of the `.htm` files in a web browser to see the effect of the JavaScript code (which runs on `bodyload` / `onload`). The scripts typically modify images or form button labels when the page loads.
