const {GetAllCaches,DeleteAllCache} = require('../models/cache.js');
const {CreateCache,DeleteExpiredCache} = require('../models/db.js');


test('The Response Returned Should not be Empty For Caches', async ()=>{
    await expect(GetAllCaches()).resolves.not.toEqual([]);
    await expect(GetAllCaches()).resolves.not.toBeNull();
});

test('Create a Sample Cache - Should Return status True On Creation', async ()=>{
    //Initialize Sample Values to Test 
    const [from, to, text, translation] = ['en','th','hello there','आपको नमस्कार'];
    await expect(CreateCache(from, to, text, translation)).resolves.toBe(true);
});



/*
 * Uncomment This to Test
 * (Note: This Test Will Delete All Expired Caches)
 */

// test('Test to Delete All Expired Caches - Should Return status True On Deletion. Test Should Fail if No Expired Caches Found', async ()=>{
//     var current = new Date(); // current Time
//     var GetTime = new Date(current.getTime());
//     var CurrentDate = GetTime.toLocaleDateString('ko-KR');
//     var FormatCurrentDate = moment(CurrentDate, 'MM-DD-YYYY').format('YYYY-MM-DD');
//     await expect(DeleteExpiredCache(FormatCurrentDate)).resolves.toBe(true);
// });



/*
 * Uncomment This to Test
 * (Note: This Test Will Delete All Existing Caches)
 */

// test('Delete all Caches - Should Return status True On Deletion', async ()=>{ 
//     await expect(DeleteAllCache()).resolves.toBe(true);
// });