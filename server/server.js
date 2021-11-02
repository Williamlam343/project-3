const express = require("express");
const { AppolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection")

const PORT = process.env.PORT || 3000