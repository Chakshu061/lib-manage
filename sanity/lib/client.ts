import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skf7yClGeSPQsu2EYOd2kv5tx17XRyCwQreMGERikySC9yZLQ1jAGNJJ1dfXBQK8U0VEMfrs7kkIfSmQCjHQHoyJclRoao1LzdgcIc27TNsekFc1MF4z6iOX3F8ToHZJHepo74PLqfR2FHJPU6IV4XVhMkP6OWcEowolP5GP1EB175NVB9Gt"
})
