#[macro_use]
extern crate rocket;

#[get("/world")]
fn hello() -> &'static str {
    "Hello World!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/hello", routes![hello])
}

