const ClinicDetailsModel = require("../models/clinicDetailsModel");
const ClinicModel = require("../models/clinicModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const ClinicByKeywordService = async (req) => {
  try {
    const SearchRegex = { $regex: req.params.keyword, $options: "i" };
    const SearchParams = [{ name: SearchRegex }, { location: SearchRegex }];
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

    const UnwindCityStage = { $unwind: "$city" };

    const ProjectionStage = {
      $project: { city: { _id: 0 } },
    };

    const data = await ClinicModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      UnwindCityStage,
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

const ClinicByCityService = async (req) => {
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

    const UnwindCityStage = { $unwind: "$city" };

    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await ClinicModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      UnwindCityStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const ClinicListService = async (req) => {
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

    const UnwindCityStage = { $unwind: "$city" };

    const ProjectionStage = {
      $project: { city: { _id: 0 }, speciality: { _id: 0 } },
    };

    const data = await ClinicModel.aggregate([
      MatchStage,
      JoinWithCityStage,
      UnwindCityStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", data: err }.toString();
  }
};
const ClinicDetailsService = async (req) => {
  try {
    const clinicID = new ObjectId(req.params.clinicID);

    const MatchStage = {
      $match: {
        clinic: clinicID,
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
    const JoinWithClinicStage = {
      $lookup: {
        from: "clinics",
        localField: "clinic", // current field
        foreignField: "_id", // cities field
        as: "clinic",
      },
    };
    // const JoinWithSpecialityStage = {
    //   $lookup: {
    //     from: "specialities",
    //     localField: "speciality",
    //     foreignField: "_id",
    //     as: "speciality",
    //   },
    // };
    const UnwindCityStage = { $unwind: "$city" };
    const UnwindClinicStage = { $unwind: "$clinic" };
    const UnwindSpecialityStage = { $unwind: "$speciality" };
    const ProjectionStage = {
      $project: {
        city: { _id: 0 },

        clinic: { _id: 0 },
      },
    };

    const data = await ClinicDetailsModel.aggregate([
      MatchStage,
      JoinWithCityStage,

      JoinWithClinicStage,
      UnwindCityStage,

      UnwindClinicStage,
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
module.exports = {
  ClinicByKeywordService,
  ClinicByCityService,
  ClinicListService,
  ClinicDetailsService,
};
