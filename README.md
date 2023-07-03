# Car App

Test task for CHI IT Academy  
Link - https://chit-it-test-ww-side.netlify.app/
- TypeScript
- React
- Redux Toolkit
  ![Pic](https://images2.imgbox.com/19/2d/998VSOVd_o.png)
### Search
The search is done by input. In the drop-down list we can select the search 
criterion. We can sort the cars by availability with another drop-down list.
![Pic](https://images2.imgbox.com/fe/c5/sLQ9VHGz_o.png)

### Add new car
The new object is added to the end of the list. After clicking on the button 
we have a modal window for adding a new car. In order to add a new car you 
need to fill in all the fields.
![Pic](https://images2.imgbox.com/c2/6e/BE6rt1YF_o.png)

### Actions(Edit, Delete)
Next to each car there is a drop-down list that allows us to choose the action 
to take. When you choose to delete, we get a modal window with a question. If 
you choose to edit, we get a modal window with fields. Color, price and 
availability are available for editing.
![Pic](https://images2.imgbox.com/8c/23/kH7OgUtj_o.png)
![Pic](https://images2.imgbox.com/e4/f2/oyFQRqT5_o.png)

### Local Storage
All user actions affect the table and everything is saved in Local Storage.

### Pagination
Pagination allows you to navigate through the pages of the list.
![Pic](https://images2.imgbox.com/cc/d8/0DWBsMqI_o.png)

### Task text
1. The task is to develop the page that will contain table with cars list. Table should contain listed columns. Table should use pagination locally. Search on top of the table should work accross all entries, not only listed page.
- Company
- Model
- VIN
- Color
- Year
- Price
- Availability
- Actions columns

2. Actions column should contain dropdown with listed actions. Each option should open respected modal window.
- Edit
- Delete

3. Edit modal should contain all data for selected car, but only some fields should be editable
- Disabled:
    - Company
    - Model
    - VIN
    - Year
- Enabled:
    - Color
    - Price
    - Availability

4. Delete modal should contain question is user sure he wants to perform this action.

5. Page should contain "Add car" button that opens add modal. Add modal should be similar to Edit modal, but all fields enabled and empty by default

6. All user actions should affect the table. Data should be saved between page reloads

7. API to get initial data - https://documenter.getpostman.com/view/5596891/SW7eyRFV?version=latest#d10a962e-a3de-4c0e-9fda-7d472c20ba24

8. Requirements to task:
- 1 week to complete (5 working days)
- Finished task should be presented in github
- There should be accessible deployed version of the task to view it
- Task could be done using Vanilla JS or React (React is preferred but not mandatory)
