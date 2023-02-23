import gql from "graphql-tag";

//access all items from strapi
export const ITEM_QUERY = gql`
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
// export const SINGLE_ITEM_QUERY = gql `
// query ITEM($slug: String!){
//     items(filters: { slug: { eq: $slug } }){

//      data{
//        attributes{
//          price
//          categories
//          condit
//          age
//          rating
//          author
//          name
//          description
//          slug
//          image{
//            data{
//              attributes{
//                formats
//              }
//            }
//          }
//        }
   
     
//      }
//    }
//    }

// }
// `;

export const SINGLE_ITEM_QUERY = `
  query Item($slug: String!) {
    items(filters: { slug: { eq: $slug } }) {
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
`;

export const SINGLE_ITEM_QUERY2 = `
  query Item($slug: String!) {
    items(filters: { slug: { eq: $slug } }) {
      data {
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


