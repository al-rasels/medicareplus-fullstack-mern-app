const mongoose = require("mongoose");
const SpecialityModel = require("../models/specialityModel");
const CityModel = require("../models/cityModel");
const DoctorsModel = require("../models/doctorsModel");
const DoctorsDetailsModel = require("../models/doctorsDetailsModel");
const ReviewModel = require("../models/reviewModel");

const ObjectId = mongoose.Types.ObjectId;

const DoctorsSpecialitiesService = async () => {
  try {
    const data = await SpecialityModel.find();
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const DoctorsCitiesService = async () => {
  try {
    const data = await CityModel.find();
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const ListedBySpecialityService = async (req) => {
  try {
    const specialityID = new ObjectId(req.params.specialityID);
    const MatchStage = {
      $match: {
        speciality: specialityID,
      },
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await DoctorsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const ListedByCityService = async (req) => {
  try {
    const cityID = new ObjectId(req.params.cityID);
    const MatchStage = {
      $match: {
        city: cityID,
      },
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await DoctorsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const DoctorsService = async (req) => {
  try {
    const MatchStage = {
      $match: {},
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await DoctorsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const ListedByKeywordService = async (req) => {
  try {
    const SearchRegex = { $regex: req.params.keyword, $options: "i" };
    const SearchParams = [{ name: SearchRegex }, { description: SearchRegex }];
    const SearchQuery = { $or: SearchParams };

    const MatchStage = {
      $match: SearchQuery,
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await DoctorsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      ProjectionStage,
    ]);
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const ListedByFilterService = async (req) => {
  try {
    let matchConditions = {};
    if (req.body["cityID"]) {
      matchConditions.city = new ObjectId(req.body["cityID"]);
    }
    if (req.body["specialityID"]) {
      matchConditions.speciality = new ObjectId(req.body["specialityID"]);
    }
    if (req.body["keyword"]) {
      const SearchRegex = { $regex: req.body["keyword"], $options: "i" };
      const SearchParams = [
        { name: SearchRegex },
        { location: SearchRegex },
        { clinic: SearchRegex },
      ];

      // Use $or for multiple search fields
      matchConditions.$or = SearchParams;
    }

    const MatchStage = {
      $match: matchConditions,
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await DoctorsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      ProjectionStage,
    ]);
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const DoctorsDetailsService = async (req) => {
  try {
    const doctorID = new ObjectId(req.params.doctorID);

    const MatchStage = {
      $match: {
        doctor: doctorID,
      },
    };
    const JoinWithCityStage = {
      $lookup: {
        from: "cities",
        localField: "city", // current field
        foreignField: "_id", // cities field
        as: "city",
      },
    };
    const JoinWithDoctorsStage = {
      $lookup: {
        from: "doctors",
        localField: "doctor", // current field
        foreignField: "_id", // cities field
        as: "doctor",
      },
    };
    const JoinWithSpecialityStage = {
      $lookup: {
        from: "specialities",
        localField: "speciality",
        foreignField: "_id",
        as: "speciality",
      },
    };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindDoctorStage = { $unwind: "$doctor" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: {
        city: { _id: 0 },
        speciality: { _id: 0 },
      },
    };

    const data = await DoctorsDetailsModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      JoinWithSpecialityStage,
      JoinWithDoctorsStage,
      UnwindCityStage,
      UnwindSpecialityStage,
      UnwindDoctorStage,
      ProjectionStage,
    ]);
    return {
      status: "success",
      data: data,
    };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};

const CreateReviewService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const reqBody = req.body;
    const data = await ReviewModel.create({
      reviewFor: reqBody["reviewFor"],
      reviewBy: user_id,
      review: reqBody["review"],
      rating: reqBody["rating"],
    });
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
// Remove Doctor Service
const RemoveDoctorService = async (req) => {
  try {
    const doctorID = new ObjectId(req.params.doctorID);
    const data = await DoctorsModel.deleteOne({ _id: doctorID });
    if(data.deletedCount === 1){
      await DoctorsDetailsModel.deleteOne({ _id: doctorID });
      await ReviewModel.deleteMany({ reviewFor: doctorID });
    }
    if (data.deletedCount === 0) {
      return { status: "error", message: "Doctor not found" };
    }
    return { status: "success", message: "Doctor removed successfully" };
  } catch (err) {
    return {
      status: "error",
      message: "An error occurred while removing the doctor",
      error: err.message,
    };
  }
};

module.exports = {
  DoctorsSpecialitiesService,
  DoctorsCitiesService,
  ListedBySpecialityService,
  ListedByCityService,
  ListedByKeywordService,
  ListedByFilterService,
  DoctorsDetailsService,
  CreateReviewService,
  DoctorsService,
  RemoveDoctorService,
};
