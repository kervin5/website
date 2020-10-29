const path = require("path")
const jimp = require("jimp")
exports.onCreateNode = ({ node, actions }, { base }) => {
  const stubText = "This is a data schema stub for Gatsby.js"
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.excerpt && !node.excerpt.includes(stubText)) {
    const output = path.join("./public", "blog", node.slug, "seo.jpg")
    const input = base
      ? path.join("./static", base)
      : path.join(__dirname, "base.jpg")

    return Promise.all([
      jimp.read(input),
      jimp.loadFont(
        node.title.length > 38
          ? jimp.FONT_SANS_64_BLACK
          : jimp.FONT_SANS_128_BLACK
      ),
      jimp.loadFont(jimp.FONT_SANS_32_BLACK),
      // jimp.read(`https:${node.primary_author.profile_image}`)
      // .then(image => {
      //     return image.resize(110,110);
      // })
    ]).then(([image, font]) => {
      image
        .resize(1200, 630)
        //   .blit(profile_image, 40,500)
        .print(font, 10, 150, node.title, 1100)
        //   .print(smallFont,
        //     160,
        //     510,
        //     node.primary_author.name,
        //     1100)
        .write(output)
    })
  } else {
    return
  }
}
