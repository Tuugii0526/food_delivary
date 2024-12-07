import e from "express";
import { Counter } from "../model/index.js";
const getCounters = async (req, res, next) => {
  try {
    const counters = await Counter.find();
    return res.status(200).json({ counters });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const createCounter = async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res
      .status(400)
      .json({ message: "counter name should be specified" });
  }
  try {
    const createdCounter = await Counter.create({
      name: name,
      number: 1,
    });
    return res.status(201).json({ createdCounter });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getCounters, createCounter };
