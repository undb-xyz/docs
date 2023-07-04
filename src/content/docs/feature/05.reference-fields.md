---
title: 'Reference Fields'
---

## Reference

### Create a Reference Field

1. **One to one**

   A Table record in first table is related to only one record of second table.

   **_Example: Country has a capital city_**

2. **One to many**

   A Table record in first table is related to more than one record of second table. But second table record maps to only one entry of first table

   Undb refers to this category of relationship as has many.
   For every has many relation defined, Undb augments belongs to relationship column in the other table automatically.

   **_Example: Country has many Cities. (other way mapping > City belongs to Country )_**

3. **Many to many**
   A Table record in first table is related to more than one record of second table; second table record can also map to more than on record of first table.

   EgoDB refers to this category of relationship as many to many. For every many to many relation defined between tables, EgoDB augments many to many relationship column in the other table automatically.

   **_Example: Film has many Actors. Actor has many Films (works on many films)_**

Further details of relationship types can be found here.

Relationships between table records can be established by using LinkToAnotherRecord column type. Workflow details are captured below.

### Adding a relationship

1. Create column.

   Click on '+' button at end of column headers.

2. Select column type.

   Select Column type as 'reference' from the drop-down menu.

3. Update column name.

   Input name in the text box provided.

4. Choose relationship table.

   Select child table from drop down menu.

5. Click on 'Create'.

### Updating linked records

1. Click cell open the record drawer.

   Click corresponding row - cell.

2. Select from the option display.

   > This is multiple options.

3. Click on 'Confirm' button, and saving you selected.

4. Column mapping showing "reference" relationship.

   Sheet1 'reference' Sheet2.

5. Column mapping for "Belongs to" relationship [Automatically updated].

   Sheet2 'belongs to' Sheet1.

## Tree

### Document is currently being updated.
