export const ITEM_QUERY = `
query{
    items{

     data{
       id
       attributes{
         price
         category
         condition
         age
         rating
         author
         name
         description
         slug
         image{
           data{
             attributes{
               formats
             }
           }
         }
       }
   
     
     }
   }
   }
`;