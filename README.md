## <p align="center">🏆 2nd Place in [Anvil Challenge](https://developerweek-2021-hackathon.devpost.com/) for DeveloperWeek 2021 🏆</p>

<div align="center">
    <h5>⬇️ Click here to see out elevator pitch on YouTube! ⬇️</h5>
    <a href="https://www.youtube.com/watch?v=OKOavxCVfiU">
        <img width="60%" src="./client/src/images/MobileDemo.gif">
    </a>
</div>

<p align="center">
    <a href="https://desolate-hollows-77552.herokuapp.com/">Deployed App Link</a> &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://devpost.com/software/auto-arbi-trader">DevPost Entry Link</a>  &nbsp; &nbsp; &nbsp; &nbsp; <a href="https://www.useanvil.com/blog/2021-03-02-developer-week-hackathon-winners#auto-arbi-trader---anvil-hackathon-runner-up">Anvil Blog Feature</a>
</p>

![Auto Arbitrader Logo](https://raw.githubusercontent.com/Archivaldi/AutoArbi-Trader/master/client/src/images/LogoWithWords.png)

---

## Inspiration

The process of buying and selling vehicles privately is painstaking. As engineers, of course, we decided to fix this problem using technology!

---

## What it does

After hours and hours of considering what is required to complete a vehicle sale transaction, we were able to create an application that allows the user to signup, use the account, then dispose of it after all the necessary paperwork has been filed and archived in your personal email.

We designed a login process for all those times when filling out forms, you realize you are missing a piece of information. You may sign out and sign back in to complete your form.

This whole process from creation to total account destruction from our Database, Cloudinary, & TypingDNA, should only take the user 5 minutes or less. Much less than the current titling and registration structure.

---

## How we built it

We started with TypingDNA. TypingDNA is a biometric authentication API that we use as a second form of authentication. This is to ensure that the user's information is totally secure while we handle the transaction. This API was simple enough to implement that it was built inside of a MaterialUI dialog box upon signup/login.

Next up was Anvil. Anvil is a digital document solution API. We were able to take the user data that was collected upon account creation and use their PDF generating API to take the very text-heavy documents and create a comprehensive bill of sale, title, & registration.

Here we ran into one of our biggest challenges. We wanted the user to have the ability to view their documents **inside of our app**. Our provided API, Anvil, offered a great solution that we took advantage of. Webhooks. When the users are finished signing their documents webhooks allow us to "watch" for when the documents can be download. At that moment we request the documents be sent back, we unzip them on our server using an NPM, and send the unzipped documents to Cloudinary. Cloudinary sends us back a host URL, and we save that into our database. Bing, bang, boom, viewable documents generated by Anvil on our App.

---

## Accomplishments that we're proud of

Where to start here... We overcame some pretty great obstacles here. Since we are such a small team, we decided to individually say what we are proud of.

"It was great to implement TypingDNA, Anvil, and Cloudinary API. Using these technologies altogether, we have been able to create one potential window into the future" _-Artur Markov_

"For sure learning MaterialUI, having previously never used it and building an app out of it all in one swoop." _-Nate Ryan_

"I'm proud that I was able to put together an advertisement in less than 24 hours and manage to keep it under 3 minutes, but still include the whole story. I've never done that before!" _-Morgan Ludemann_

---

## What's next for Auto Arbi-Trader

There are a few hurdles left to face, including getting state governments to process the idea. The DMV would need to be able to verify the integrity of documents. We would like to be able to upload a title, government ID & bill of sale to prefill user information using machine learning. We would also need to incorporate microservice fees, and fund withholding and transferring according to transaction status.


<p align="center">
| <a href="tel:5035047581">(503)504-7581</a> || <a href="mailto:nathanieljryan1994@gmail.com">nathanieljryan1994@gmail.com</a> || <a href="https://www.linkedin.com/in/nathanieljryan/">LinkedIn</a> |
</p>
