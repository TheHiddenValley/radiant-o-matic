# Radiant o Matic

Mix and match traits to generate the PFP that you want.

## IMPORTANT - ENSURE TRAIT IMAGE SIZE IS 1600 X 1600 but on a 32 x 32 canvas.

## Artists Instructions on uploading new traits
1. Create a Pull Request
2. Go to (https://github.com/TheHiddenValley/radiant-o-matic/tree/main/src/alpaca).
3. Go to the folder of that trait category.
4. Upload the image by click on add file and drag drop followed by pressing submit.
5. After uploading, go to (https://github.com/TheHiddenValley/radiant-o-matic/blob/main/src/alpacaData.js) and update what you uploaded.

To do step 5:
1. See which category your new trait belongs to
2. Copy and paste a new line below the last trait in that category
3. For id: 0, -- Just increase by 1
4. For label, -- This will be the name of the trait that appears
5. For filename, -- This will be the exact name (case sensitive) of your file without the .png
6. For selected, -- Put this as false

Done!
