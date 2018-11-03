// Copyright (c) 2018 Sophie Cyrille Lasserre, all rights reserved 

var nb_imgs_side = 0;
const nb_themes = 15;
var themes_list = new Array(nb_themes);
var str = '';
var last_theme_id = -1;
const dark_color = "#333";
const light_color = "#fff";
var v_textContent = "";


for (j=0; j < nb_themes; j++) 
{
    themes_list[j] = [];
    // Change all the images to the new theme
    var theme_id = parseInt(j) + 1;
    var new_name_fld = (("img/theme").concat(theme_id)).concat("/"); 
    var new_name_img = "";
    var img_id = 1;
    var nb_imgs = 0;

    switch (j)
    {
        case 0:
            nb_imgs = 7;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 1:
            nb_imgs = 12;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 2:
            nb_imgs = 13;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 3:
            nb_imgs = 9;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 4:
            nb_imgs = 5;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 5:
            nb_imgs = 9;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 6:
            nb_imgs = 6;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 7:
            nb_imgs = 6;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 8:
            nb_imgs = 6;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 9:
            nb_imgs = 16;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 10:
            nb_imgs = 7;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 11:
            nb_imgs = 18;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 12:
            nb_imgs = 6;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 13:
            nb_imgs = 6;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
        case 14:
            nb_imgs = 10;
            for (i=0; i < nb_imgs; i++) 
            {
                img_id = parseInt(i + 1);
                new_name_img = (new_name_fld.concat("img").concat(img_id)).concat(".jpeg");
                themes_list[j].push(new_name_img);
            }
            break;
    }
    
}

// Document onload
document.body.onload = addElements;

// Main image's Block
const current_img = document.querySelector("#current-img");

// The images on the side block
var list_imgs = null;

// Buttons
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// Opacity of the image clicked on the side block
const opacity = 0.4;

// Theme's Block
const list_themes_img = document.querySelectorAll(".theme > img");
const list_themes_text = document.querySelectorAll(".theme .titel > p");
// Text element of the current image
var current_img_text = document.querySelector("#current-img-text");

function removeElementsImgs()
{
    // The parent node
    const parentNode = document.querySelector("div.imgs");

    const list_elts = document.querySelectorAll("div.imgs > img");
    list_elts.forEach(el => parentNode.removeChild(el));

    // The parent node of the parent
    const contNode = document.querySelector(".container");
    contNode.removeChild(parentNode);

}

function addElementsImgs(theme_index)
{
    // The parent node container
    const contNode = document.querySelector(".container");

    // Initialize the nb_imgs_side to the number of imgs of the first theme
    nb_imgs_side = themes_list[theme_index].length;

    // Construct the images´s elements
    var newImgBlock = document.createElement("div");
    newImgBlock.classList.add("imgs");   
    for (i=0; i < nb_imgs_side; i++)
    {
        var newEl = document.createElement("img");
        // Attribute data-src
        var newAttr = document.createAttribute("data-src");
        // The name of the image
        newAttr.value = themes_list[0][i];
        newEl.setAttributeNode(newAttr);
        // Attribute Id
        newAttr = document.createAttribute("id");
        var nb = i + 1;
        newAttr.value = "img".concat(nb);
        newEl.setAttributeNode(newAttr);
        // Attr class .center
        newAttr = document.createAttribute("class");
        newAttr.value = "center";
        newEl.setAttributeNode(newAttr);
        // Add the new element to the node
        newImgBlock.appendChild(newEl);
    }

    // Add child node to the parent
    contNode.appendChild(newImgBlock);

    list_imgs = document.querySelectorAll("div.imgs > img");
    // OnClick Event on each image of the container block
    list_imgs.forEach(img => 
        img.addEventListener("click", side_imgClick)
    );

}

function addElements()
{
    addElementsImgs(0);
    
    // from David Walsh Transition´s effect for loading images
    const list_data_src = document.querySelectorAll('img[data-src]');
    list_data_src.forEach(img => {
        img.classList.add('loader');
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = setTimeout(() => start_theme(img), 1000);
    });
    

    // OnClick Button
    btn1.addEventListener("click", previous_folio);
    btn2.addEventListener("click", next_folio);

    // Initialize the current image text to the first theme
    current_img_text.textContent = list_themes_text[0].textContent;
    // Play animation for the current image
    current_img_text.classList.add('zoomIn');
    current_img_text.style.animationName = "zoomIn";

    // Add Click Event to image´s themes
    list_themes_img.forEach(img => 
        img.addEventListener("click", theme_imgClick)
    );

    // Add click event on text´s themes
    list_themes_text.forEach(text => text.addEventListener("click", theme_imgClick));

}

// Change to next theme
function next_folio()
{
    var theme_id = 1;

    if (last_theme_id == -1) 
        theme_id = 2;
    else
    {
        if (last_theme_id == nb_themes)
            theme_id = 1;
        else
            theme_id = parseInt(last_theme_id) + 1;   
    }

    next_theme(theme_id);
}

// Change to previous theme
function previous_folio()
{
    var theme_id = 1;

    if (last_theme_id == -1) 
        theme_id = 10;
    else
    {
        if (last_theme_id == 1)
            theme_id = 10;
        else
            theme_id = parseInt(last_theme_id) - 1;   
    }

    next_theme(theme_id);
}

function start_theme(img)
{
    const theme_id = img.id;
    if (theme_id.length <= 2)
    {   
        // Start the text animation on a theme image
        startAnimation(list_themes_text[theme_id - 1]);
        // Make the image to appear
        img.removeAttribute('data-src');    
    }
    else
        img.removeAttribute('data-src');
        
    img.classList.remove('loader');   
}

function animation_Listener(e)
{
    if (e.animationName == "zoomInDark")
    {
        e.target.style.color = dark_color;
    }
}

function side_imgClick(e) {
    // Reset opacity
    list_imgs.forEach(img => (img.style.opacity = 1));

    // Set current image to target image
    current_img.src = e.target.src;
    // Erase the text content of the image
    // current_img_text.textContent = "";

    // Add fade-in class
    current_img.classList.add('fade-in');

    // Remove fade-in class from list
    setTimeout(() => current_img.classList.remove('fade-in'), 500);

    // Change the opacity of the target image
    e.target.style.opacity = opacity;
}



function startAnimation(p)
{
    // Play animation
    p.classList.add('zoomIn');
    p.style.animationName = "zoomIn";
    p.style.animationIterationCount = 1;

    // Add Animation Event Listener to text´s themes
    p.addEventListener("animationend", animation_Listener, false);
}

function resetOpacityAndText(img)
{
    if (img.style.opacity != 1)
    {
        img.style.opacity = 1;
        const theme_id = img.id;
        const p_element = list_themes_text[theme_id - 1];
        // Change the animation´s name => start the new animation
        p_element.style.animationName = "zoomIn";
        p_element.style.color = light_color;
    }
}

function resetOpacity(img)
{
    if (img.style.opacity != 1)
    {
        img.style.opacity = 1;
    }
    // In case of a hidden image
    if (img.hidden == true)
        img.hidden = false;

}

// start the animation of the main image
function startNewAnimation(v_el, v_text)
{
    v_el.style.display = "none";
    setTimeout(()=>
    {
            if (v_text.length != 0)
            {
                v_el.textContent = v_text;
            }
            v_el.style.display = "block";
        }, 50);
}

function end_loader(img)
{
    img.setAttribute('src', img.getAttribute('data-src'));
    img.classList.remove("loader");
    img.removeAttribute('data-src');
}

function next_theme(theme_id)
{
    const p_element = (document.querySelectorAll(".theme p"))[theme_id - 1];
    const p_image = (document.querySelectorAll(".theme img"))[theme_id - 1];
    const p_titel = document.querySelector(".main-img .titel");

    // Change the animation´s name
    if (p_element.style.animationName == "zoomInDark")
    {
        // setTimeout(startNewAnimation(p_element), 2000);
        startNewAnimation(p_element, p_element.textContent);
    }
    else
    {
        // Change the opacity of the target image
        p_image.style.opacity = opacity;
        p_element.style.animationName = "zoomInDark";
    }

    // Change all the images to the new theme
    var new_name_fld = (("img/theme").concat(theme_id)).concat("/"); 

    // Set current image to target image from new theme
    var new_name_img = (new_name_fld.concat("img1")).concat(".jpeg");
    current_img.src = new_name_img;

    // Reset opacity and text color of the last clicked image theme
    // list_themes_img.forEach(img => (img.style.opacity = 1));
    if (theme_id != last_theme_id && last_theme_id != -1)
        resetOpacityAndText(list_themes_img[last_theme_id -1]);

    // Remove all the child nodes of the container for the images
    removeElementsImgs();

    // Replace the images with the ones of the new theme
    const index_new_theme = parseInt(theme_id) - 1;
    // Readd the nodes (not the same number, it was simplier...)
    addElementsImgs(index_new_theme);

    for (let i=0; i < list_imgs.length; i++)
    {
        if (i < themes_list[index_new_theme].length)
        {
            new_name_img = themes_list[index_new_theme][i];
            list_imgs[i].setAttribute('src', "img/spin.jpeg");
            list_imgs[i].setAttribute('data-src', new_name_img);
            list_imgs[i].classList.add("loader");
            list_imgs[i].onload = setTimeout(() => end_loader(list_imgs[i]), 1000);
        }
        else
        {
            list_imgs[i].setAttribute('src', "");
        }
    }

    list_imgs.forEach(resetOpacity);


    // Text animation of the main image
    startNewAnimation(current_img_text, p_element.textContent);



    // Save the theme´s id for next click
    last_theme_id = theme_id;
}

function theme_imgClick(e) {
    
    // Restart animation to the clicked theme
    next_theme(e.target.id);
    
}


