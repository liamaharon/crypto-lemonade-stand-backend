# Crypto Lemondade Stand Backend

## Setup

```bash
git clone https://github.com/liamaharon/crypto-lemonade-stand-backend.git
cd crypto-lemondade-backend
npm i
```

## Start server

```bash
npm start
```

## Introduction

This repo contains the backend for the Crypto Lemonade Stand project. The accociated front-end for the project can be found [here](https://github.com/liamaharon/crypto-lemonade-stand-frontend).

## Initial data

On server startup some data is created, including two accounts

- Admin
  - email: admin@email.com
  - password: pass
  - role: admin
- User1
  - email: user@email.com
  - password: pass
  - role: $authenticated

## Features

- [x] The admin user has unrestricted access to all models
- [x] Unauthenticated users can create new accounts
- [x] Authenticated users can view products
- [x] Authenticated users can view only their own orders
- [x] Authenticated users can create new orders for themselves
- [x] Status attribute is validated for all orders
- [x] Addresses attribute is validated for Bitcoin and Ethereum orders
