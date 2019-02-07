# Crypto Lemonade Stand Backend

## Setup

```bash
git clone https://github.com/liamaharon/crypto-lemonade-stand-backend.git
cd crypto-lemonade-stand-backend
npm i
```

## Start server

```bash
npm start
```

## Introduction

This repo contains the backend for the Crypto Lemonade Stand project. The associated front-end for the project can be found [here](https://github.com/liamaharon/crypto-lemonade-stand-frontend).

## Initial data

On server startup some data is created. 

### Accounts

- Admin
  - email: admin@email.com
  - password: pass
  - role: admin
- User1
  - email: user@email.com
  - password: pass
  - role: $authenticated

### Products
- Ethereum product
- Bitcoin product

### Orders
- Ethereum order for User1
- Bitcoin order for User1

## Features

- [x] Account model that inherits User
- [x] Product model that inherits PersistedModel. Contains information about a crypto asset/product.
- [x] Order model that inherits PersistedModel. Contains information about an order, links to an Account and Product.
- [x] Status attribute is validated for all orders
- [x] Addresses attribute is validated for Bitcoin and Ethereum orders
- [x] Custom admin role
- [x] The admin user has unrestricted access to all models
- [x] Unauthenticated users can create new accounts
- [x] Authenticated users can view products
- [x] Authenticated users can view only their own orders
- [x] Authenticated users can create new orders for themselves
