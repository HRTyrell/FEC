# L77 Online Clothing Store
This is a front-end web app for a mock online clothing store, providing a similar customer experience as any modern, big name online store. 

## Contributors
  * Bala Sathiya
  * Ben Tanaka [![GitHub_Logo](https://user-images.githubusercontent.com/37204126/204853859-fffecb7a-8974-44dc-af7d-d962e67e5cd5.png)](https://github.com/BTanaka11) [![LI-Logo](https://user-images.githubusercontent.com/37204126/204705205-b075ad02-7f84-4100-a2bc-6b21009af8a2.png)](https://linkedin.com/in/bentanaka)
  * Drew Henderson
  * Gabi Olarte

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Related Products & Your Outfit
  ![RelatedItemsFeatures](https://user-images.githubusercontent.com/5504860/198851825-45b8c683-dd7c-4dc6-b3fb-947ea1d1bed9.gif)
  
  This Component consists of the following:
###### Related Items
- A scrollable carousel that shows all the realted items for the selected product
- Clickable Cards that show the relavant product information, the onclick handler changes the selected product and scrolls the user to the top
- A star that, when hovering opens a modal that compares the related item to the currently selected item
###### Your Outfit
- A scrollable carousel that shows all the products in the users outfit
- Clickable Cards that show the relavant product information, the onclick handler changes the selected product and scrolls the user to the top
- An initial card that, when clicked adds the selected product to the users outfit, being retained in local Storage
- A cross in the top right that, when clicked, removes the product from the users oufit.
 
## Ratings & Reviews
<img src="https://user-images.githubusercontent.com/37204126/204711146-2df11b8f-b82b-4717-9916-57844d55dea8.gif" width="650"/>

###### Breakdown
- Display of the product's average rating and further breakdown by count of reviews for each star 1-5 and average characteristic ratings
- Clickable starbars which filter the list. Each is additive and may be removed one at a time or all at once to unfilter the list
###### Review List
- Filterable and sortable list of reviews. Each review has functionality to enlarge any images present in modal view and mark review as helpful
###### New Review Form
- Allows customers to submit new reviews and contains form validation requiring certain fields to be entered and review body to be at least 50 characters. Customers may attach up to 5 photos, which go through a Cloudinary API to store on the cloud and generate a URL, which then gets saved in a separate backend service which services all other data needs.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

