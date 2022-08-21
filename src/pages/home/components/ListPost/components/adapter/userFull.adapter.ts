import { ApiUserFull, UserFull, Location, ApiLocation } from "src/models";

function locationAdapter(location: ApiLocation): Location {
  return {
    city: location.city,
    country: location.country,
    state: location.state,
    street: location.street,
    timezone: location.timezone
  }
}

export const userFullAdapter = (data: ApiUserFull): UserFull => {
  return {
    dateOfBirth: data.dateOfBirth,
    email: data.email,
    firstName: data.firstName,
    gender: data.gender,
    id: data.id,
    lastName: data.lastName,
    location: locationAdapter(data.location),
    phone: data.phone,
    picture: data.picture,
    registerDate: data.registerDate,
    title: data.title
  }
};