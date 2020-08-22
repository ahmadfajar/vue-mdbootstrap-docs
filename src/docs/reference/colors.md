::: lead
**Vue MdBootstrap** color class follow the [Material Design](https://material.io/design) specification,
and derived from Bootstrap V4 CSS. Each color might exposed various tones varying from bright to dark. 
This will aid you in creating an inviting and color-consistent design. When using Vue MdBootstrap components, 
these variants refers to their variant-name, rather than by the underlying CSS classname.
:::


## Applying color variants to html element

#### Background color variants

Background color can be applied to any html element by using the classname `bg-{variant}`.

::: demo
```html
<div class="row text-center">
    <div class="col-md-6 col-xl-4">
        <div class="bg-primary p-4">Inner text.</div>
    </div>
</div>
```
:::


#### Border color variants

Border color can be applied to any html element by using the classname `border-{variant}`.

::: demo
```html
<div class="row text-center">
    <div class="col-md-6 col-xl-4">
        <div class="border border-primary p-4">Inner text.</div>
    </div>
</div>
```
:::


#### Text color variants

Text color can be applied to any html element by using the classname `text-{variant}`.

::: demo
```html
<p class="text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p class="text-success">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
<p class="text-danger">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
<p>Impedit architecto, <a class="text-purple">totam hic sunt eum odio, deleniti</a>.</p>
```
:::


## Vue MdBootstrap colors

<ColorPalete palette="bootstrap"></ColorPalete>

::: info
These color variants can be applied on some Vue MdBootstrap components.
:::


## Material colors

<ColorPalete palette="material"></ColorPalete>

::: info
These color variants can be applied on some Vue MdBootstrap components.
:::


## Grey colors

<ColorPalete palette="grays"></ColorPalete>

::: warning
These grey color variants can only be applied to html element, see: **background, border**,
and **text color variants** above.
:::


## Full colors

<ColorPalete palette="fullColor"></ColorPalete>

::: warning
These color variants can only be applied as background color to html element, 
see: **background color variants** above.
:::

<div class="pt-4"></div>

These color variants can also be used to produce **RGBA background colors**.

::: demo
```html
<div class="row text-center">
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-blue-slight">bg-rgba-blue-slight</div>
    </div>
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-blue-light">bg-rgba-blue-light</div>
    </div>
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-blue-strong">bg-rgba-blue-strong</div>
    </div>
</div> 
<div class="row text-center">
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-red-slight">bg-rgba-red-slight</div>
    </div>
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-red-light">bg-rgba-red-light</div>
    </div>
    <div class="col-md-6 col-xl-4">
        <div class="p-3 bg-rgba-red-strong">bg-rgba-red-strong</div>
    </div>
</div>
```
:::
