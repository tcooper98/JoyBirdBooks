
//access all items from strapi
export const ITEM_QUERY = `
query ITEMS{
    items{

     data{
       id
       attributes{
         price
         categories
         condit
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
export const SINGLE_ITEM_QUERY = `
query ITEM{
    item(filters: {slug: {eq:$slug)}}{

     data{
       id
       attributes{
         price
         categories
         condit
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

}
`;


