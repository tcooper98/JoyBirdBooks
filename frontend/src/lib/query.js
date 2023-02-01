
//access all items from strapi
export const ITEM_QUERY = `
query ITEMS{
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
//access single item from strapi


