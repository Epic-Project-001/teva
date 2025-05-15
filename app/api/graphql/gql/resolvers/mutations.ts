import axios from "axios";
import { concat, map } from "lodash";
import Submission from "@/app/api/graphql/gql/models/Submission";
import * as BrevoClient from "@sendinblue/client";

const Mutations: any = {
    insertOneSubmission: async (_: any, { data }: any) => {
        try {
            const result = await Submission.create(data);

            try {
                const brevo = new BrevoClient.ContactsApi();
                const brevoApiKey = process.env.BREVO_API_KEY || process.env.NEXT_PUBLIC_BREVO_API_KEY;

                console.log("BREVO API KEY:", brevoApiKey);

                brevo.setApiKey(
                    BrevoClient.ContactsApiApiKeys.apiKey,
                    brevoApiKey!
                );

                const brevoContact = {
                    email: result.email,
                    attributes: {
                        FIRSTNAME: result.firstname,
                        LASTNAME: result.lastname,
                        ZIPCODE: result.zipCode,
                        LANGUAGE: result.language,
                        BLACK: result.black,
                        HISPANIC: result.hispanic,
                        ASIAN: result.asian,
                    },
                    updateEnabled: true,
                    listIds: [4]
                };

                const brevoResponse = await brevo.createContact(brevoContact);
                console.log("Brevo contact created", brevoResponse.body);
            } catch (brevoErr: any) {
                console.error("Error sending to Brevo:");
                console.error(brevoErr);
            }

            return result;
        } catch (error) {
            console.error("Error inserting submission:", error);
            console.error("Data that failed:", data);
            throw new Error("Failed to insert submission.");
        }
    },
};

export default Mutations;