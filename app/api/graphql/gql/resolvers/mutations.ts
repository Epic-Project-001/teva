import axios from "axios";
import { concat, map } from "lodash";
import Submission from "@/app/api/graphql/gql/models/Submission";

const Mutations: any = {
  insertOneSubmission: async (_: any, { data }: any) => {
    try {
      const result = await Submission.create(data);
      const properties = concat(
        map(
          [
            { id: "email", property: "email" },
            { id: "firstname", property: "firstname" },
            { id: "lastname", property: "lastname" },
            { id: "zipCode", property: "zip" },
          ],
          function (item: any) {
            const { id, property } = item;
            if (id === "_id") {
              return {
                property: "submission_id",
                value: result._id.toString(),
              };
            }

            return {
              property,
              value: result[id],
            };
          }
        )
      );
      console.log("HUBSPOT PROPERTIES", properties);
      const response = await axios.post(
        `https://api.hubapi.com/contacts/v1/contact`,
        { properties },
        {
          headers: {
            Authorization: `Bearer ${
              process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN ||
              process.env.NEXT_PUBLIC_HUBSPOT_PRIVATE_APP_ACCESS_TOKEN
            }`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("HUBSPOT RESPONSE", response);
      return result;
    } catch (error) {
      console.error("Error inserting submission:", error);
      throw new Error("Failed to insert submission.");
    }
  },
};

export default Mutations;
