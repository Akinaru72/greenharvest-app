# GreenHarvest — One-Page Organic Vegetables Website

**GreenHarvest** is an interactive one-page website created to showcase modern web development practices, including responsive design, semantic HTML5, and optimized graphics.  
The site is designed for a company that sells organic vegetables and provides users with the ability to quickly explore the product range, read customer reviews, learn about the ordering process, and make a purchase through a convenient online form.  
The site layout is built with various devices in mind — from mobile phones to large desktops — with Retina display support and optimized images, ensuring fast loading and a pleasant user experience.

---

## Project Overview

**GreenHarvest** is a single-page website that demonstrates semantic HTML5, adaptive layout, optimized graphics, and interactive forms.

### Basic Requirements

- Adaptive layout except for mobile devices. Breakpoints:
  - Mobile: flexible layout from `320px`, adaptive from `375px`
  - Tablet: from `768px`
  - Desktop: from `1280px`
- Valid HTML and CSS:
  - HTML Validator: [https://validator.w3.org/](https://validator.w3.org/)
  - CSS Validator: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
- Semantic HTML5 structure
- Connected fonts
- Optimized vector and raster graphics
- Support for Retina screens
- Optimized image loading
- All SVG icons connected via sprite
- Favicon included

---

## Project Structure

- **Header**  
  Contains logo and site navigation. Mobile and tablet versions use a sidebar that appears on toggle. Menu height matches the viewport. Navigation uses anchor links to sections.

- **Hero**  
  Main heading: _“Organic vegetables to your diet today!”_  
  Includes descriptive text. Image implemented as a background.

- **How it works**  
  Hidden heading for crawlers. Descriptive text and ordered list of steps using `<ol>` with custom counters ([MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters)). Images implemented as content.

- **Advertisement**  
  Hidden heading for crawlers. Descriptive text. Images as content.

- **Vegetables**  
  Section heading: _“Organic vegetables”_  
  Descriptive text. List of products using `<ul>`. Images as content.

- **Reviews**  
  Section heading: _“Reviews from our customers”_  
  List of customer reviews using `<ul>`. Images as content.

- **Your Order**  
  Section heading: _“Fresh Harvest Box has got you covered”_  
  Descriptive text and form including:

  - `<input>` fields (required, with minimal validation using pattern attribute)
  - `<textarea>` field
  - Submit button: _Send_
    Images as content.

- **Social Links**  
  List of company social media links using `<ul>` opening in new tab:

  - [Instagram](https://www.instagram.com/goitclub/)
  - [YouTube](https://www.youtube.com/c/GoIT)
  - [Facebook](https://www.facebook.com/goITclub/)

- **Footer**  
  Contains logo, company slogan, list of anchor links to sections (`<ul>`), and contact information. Phone number is a clickable link.

---

## Resources

- [Figma Layout](<https://www.figma.com/file/wuEpGhwCepGCOUw7mZFRac/Web-Studio-(Version-5.0)?type=design&node-id=570573-1472&mode=design&t=nSUcnqBK92tVgzcJ-0>)
- [Code Guide](https://codeguide.co/)
- [MDN: Using counters](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- [Instagram](https://www.instagram.com/goitclub/)
- [YouTube](https://www.youtube.com/c/GoIT)
- [Facebook](https://www.facebook.com/goITclub/)
- [CodePen Demo](https://codepen.io/SergeyKorobka/pen/WNWeKVp)

---

## Links

- [GitHub Repository](https://github.com/Akinaru72/greenharvest-app)
- [Live Page](https://akinaru72.github.io/greenharvest-app/)
