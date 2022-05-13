import Joi from 'joi';

const schema:Joi.ObjectSchema  = Joi.object({
  name: Joi.string().required(), //string().min().max.alphnum()
  age: Joi.number().integer().min(1).max(80).required(),
  amount: Joi.number(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,24}$/)
    .required(),
  date: Joi.date()
});

const payload = {
  name: 'alkjdlfjal',
  age: 20,
  amount: 100.01,
  password: 'adflkasdflkj',
  date: new Date()
};

schema
  .validateAsync(payload)
  .then((payload) => console.log({ payload }))
  .catch((error) => console.log({ error }));

// or
const { value, error } = schema.validate(payload);
if (error) {
  console.log({ error });
} else if (value) {
  console.log({ value }); //res.status(400).json({"error": error.details[0]})
}


// optional validate

 const optionalSchema : Joi.ObjectSchema = Joi.object({
    name: Joi.string().required(),
    preferred_method: Joi.string().required().valid('Email', 'Telephone'),
    email: Joi.string().email().when('preferred_method', { is: 'Email', then: Joi.required() }),
    telephone: Joi.string().when('preferred_method', { is: 'Telephone', then: Joi.required() })
  });
