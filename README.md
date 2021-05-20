# CV Template

## Usage

0. Install [Node.js](https://nodejs.org/en/).
1. Run `npm install` to install template dependencies.
2. Add your information to `public/index.html`.
3. Update template and generate new PDF by running `npm run build:css:production`.
4. Upload all the content inside the `public` folder to your web server.

## Customization

### Colors

The template has three defined color palettes: green, gray, and orange. You can customize them as you like.

To switch between themes, you have to:

1. Uncomment the desired color palette in `tailwind.config.js`
2. Uncomment the desired image in `src/styles.css`
3. Run `npm run build:css:production` to generate new `public/generated_styles.css`

To create a new color palette:

1. Add a new palette key in `themes.js`, for example, `yourCustomPalette` and copy the properties from one of the previous palettes.
2. Import new palette key in `tailwind.config.js` file.
3. Add a new palette next to others. For example:

```
  // ...green,
  // ...gray,
  // ...orange,
  ...yourCustomPalette <---
```

4. Run `npm run build:css:production` to generate new `public/generated_styles.css`

### Structure

To customize the original template structure:

0. Install [Node.js](https://nodejs.org/en/).
1. Run `npm install` to install template dependencies.
2. Run `npm run build:css:development` to generate new `public/generated_styles.css` with all Tailwind classes.
3. Change `public/index.html` and `src/styles.css` to customize the template.
4. Run `npm run build:css:production` to generate production-ready `public/generated_styles.css` with only used classes.

## Licence

The template is only for personal use and cannot be transferred for free or sold to 3rd parties.

The template use free and open source assets:

- [TailwindCSS](https://tailwindcss.com/)
- [Rubik Font](https://fonts.google.com/specimen/Rubik?preview.text_type=custom)

The background images and icons not a part of the template but present for demo purposes.
