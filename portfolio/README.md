**box-sizing:**
By default, when you set (`width: 200px`) on an element and then add (`padding: 20px`), the element becomes 240px wide — the padding is added on top of the width. This is confusing and causes layout bugs constantly.
border-box changes that rule: the width you set includes the padding and border. So width: 200px with padding: 20px stays 200px total. The padding eats into the content space instead of expanding outward.

## Reference to what exists. 
The properties you'll use most often, grouped by what they do: 

Spacing \
`padding`, `margin` \
— inside and outside space. \
Can target sides: `padding-top`, `margin-left`, or shorthand `padding: top right bottom left` 

Size\
`width`, `height`, `max-width`, `min-height`

Layout \
`display` (block, inline, flex, grid, none), `flex-direction`, `justify-content`, `align-items`, `gap`, `grid-template-columns` 

Visual \
`background-color`, `color`, `border`, `border-radius`, `box-shadow`, `opacity` 

Typography \
`font-size`, `font-weight`, `font-family`, `line-height`, `text-align`, `text-decoration` 

Positioning \
`position` (relative, absolute, fixed, sticky), `top`, `left`, `right`, `bottom`, `z-index` 

Animation \
`transition`, `transform`, `animation` 

That list covers 90% of everything you'll write. Bookmark MDN and search when you hit the 10%.