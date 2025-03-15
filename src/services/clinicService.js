// const ClinicByKeywordService = async (req) => {
//   try {
//     const SearchRegex = { $regex: req.params.keyword, $options: "i" };
//     const SearchParams = [{ name: SearchRegex }, { description: SearchRegex }];
//     const SearchQuery = { $or: SearchParams };

//     const MatchStage = {
//       $match: SearchQuery,
//     };
//     const JoinWithCityStage = {
//       $lookup: {
//         from: "cities",
//         localField: "city", // current field
//         foreignField: "_id", // cities field
//         as: "city",
//       },
//     };
//     const JoinWithSpecialityStage = {
//       $lookup: {
//         from: "specialities",
//         localField: "speciality",
//         foreignField: "_id",
//         as: "speciality",
//       },
//     };
//     const UnwindCityStage = { $unwind: "$city" };
//     const UnwindSpecialityStage = { $unwind: "$speciality" };
//     const ProjectionStage = {
//       $project: { city: { _id: 0 }, speciality: { _id: 0 } },
//     };

//     const data = await DoctorsModel.aggregate([
//       MatchStage,
//       JoinWithCityStage,
//       JoinWithSpecialityStage,
//       UnwindCityStage,
//       UnwindSpecialityStage,
//       ProjectionStage,
//     ]);
//     return {
//       status: "success",
//       data: data,
//     };
//   } catch (err) {
//     return { status: "fail", data: err }.toString();
//   }
// };
