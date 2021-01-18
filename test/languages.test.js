const {GetAllSupportedLanguages} = require('../models/languages.js');


test('The Response Returned Should not be Empty For Languages', async () => {
    await expect(GetAllSupportedLanguages()).resolves.not.toEqual([]);
  });
  
