# Demo-Name Funeral Services - Quick Start Guide

Hey there! 👋 Welcome to your new funeral website project. This guide will walk you through everything step-by-step in plain English. No confusing jargon, just simple instructions anyone can follow.

## What You've Got

This is a fully functional, modern funeral website built with:
- **Next.js 15** - The latest React framework (super fast and SEO-friendly)
- **TypeScript** - Makes your code safer and easier to maintain
- **Tailwind CSS** - For beautiful, responsive styling
- **Framer Motion** - For smooth, professional animations
- **Lucide React** - Premium icons (no emojis, all professional)

The site is designed with a premium, calm aesthetic using:
- **Colors**: Charcoal grays, warm beige, gold accents, and cream whites
- **Fonts**: Playfair Display (headings) and Crimson Text (body) - elegant and respectful
- **Features**: Scroll animations, mobile-responsive, 24/7 contact buttons everywhere

---

## Phase 1: Getting Started (First 10 Minutes)

### Step 1: Install Node.js

Before anything else, you need Node.js installed on your computer.

**On Windows:**
1. Go to https://nodejs.org
2. Download the "LTS" version (the recommended one)
3. Run the installer
4. Click "Next" through everything (keep all defaults)
5. Restart your computer when done

**On Mac:**
1. Go to https://nodejs.org
2. Download the "LTS" version
3. Open the downloaded file and follow the installation
4. Or use Homebrew if you have it: `brew install node`

**Check if it worked:**
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Type: `node --version`
3. You should see something like "v20.x.x"
4. Type: `npm --version`
5. You should see something like "10.x.x"

If you see version numbers, you're good to go! ✅

### Step 2: Open the Project

**Option A - Using VS Code (Recommended):**
1. Download VS Code from https://code.visualstudio.com if you don't have it
2. Install it
3. Open VS Code
4. Click "File" → "Open Folder"
5. Navigate to where you saved the `funeral-website` folder
6. Click "Select Folder"

**Option B - Using Terminal/Command Prompt:**
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your project:
   ```bash
   cd path/to/funeral-website
   ```
   (Replace `path/to/` with the actual location)

### Step 3: Install All Dependencies

This downloads all the libraries and tools the project needs.

**In VS Code:**
1. Click "Terminal" in the top menu
2. Click "New Terminal"
3. Type this command and press Enter:
   ```bash
   npm install
   ```

**In regular Terminal/Command Prompt:**
1. Make sure you're in the project folder
2. Type:
   ```bash
   npm install
   ```

**What's happening:**
- Your computer is downloading all the necessary packages
- This might take 2-5 minutes
- You'll see a progress bar and lots of text scrolling
- Don't worry about warnings (yellow text) - those are normal
- As long as you don't see big red error messages, you're fine

**When it's done, you should see something like:**
```
added 342 packages in 45s
```

---

## Phase 2: Running Your Website (Next 5 Minutes)

### Step 4: Start the Development Server

Time to see your website!

**Type this command:**
```bash
npm run dev
```

**What happens:**
- You'll see some text like "ready - started server on 0.0.0.0:3000"
- Your website is now running locally on your computer

### Step 5: View Your Website

**Open your browser and go to:**
```
http://localhost:3000
```

**You should see:**
- The beautiful hero section with "We're Here for You"
- Smooth scroll animations
- All the sections loading as you scroll
- Everything should be working!

**Troubleshooting:**
- **Port already in use?** Try: `npx kill-port 3000` then `npm run dev` again
- **Nothing loads?** Make sure you ran `npm install` first
- **Errors in terminal?** Read the error message - it usually tells you what's wrong

### Step 6: Testing on Your Phone

Want to see how it looks on mobile?

1. Make sure your phone and computer are on the same WiFi
2. Find your computer's IP address:
   - **Windows**: Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - **Mac**: System Preferences → Network, you'll see it there
3. On your phone's browser, go to: `http://YOUR-IP-ADDRESS:3000`
   - Example: `http://192.168.1.5:3000`
4. You should see your website!

---

## Phase 3: Customizing Your Website (30-60 Minutes)

Now let's make it yours!

### Step 7: Update Company Name

**File to edit:** `app/layout.tsx`

1. Open this file in VS Code
2. Find line 23 (or search for "Demo-Name"):
   ```typescript
   title: 'Demo-Name Funeral Services | Compassionate Care in Bloemfontein',
   ```
3. Replace "Demo-Name" with your actual company name:
   ```typescript
   title: 'Your Company Name Funeral Services | Compassionate Care in Bloemfontein',
   ```
4. Do the same for the description on the next line
5. Save the file (Ctrl+S or Cmd+S)

**File to edit:** `components/Navigation.tsx`

1. Open this file
2. Find line 47 (search for "Demo-Name"):
   ```typescript
   Demo-Name
   ```
3. Replace with your company name
4. Save the file

**File to edit:** `components/Footer.tsx`

1. Open this file
2. Find line 15 (search for "Demo-Name"):
   ```typescript
   Demo-Name
   ```
3. Replace with your company name
4. Save the file
5. Also update the email address on line 107

**Check your work:**
- Go back to your browser
- Refresh the page (F5 or Cmd+R)
- You should see your company name everywhere now

### Step 8: Update Contact Information

**File to edit:** `components/Navigation.tsx`

1. Find line 52:
   ```typescript
   href="tel:+27511234567"
   ```
2. Replace with your actual phone number:
   ```typescript
   href="tel:+27511234567"  // Keep this format!
   ```

**File to edit:** `components/ImmediateHelp.tsx`

1. Find line 58 and update the phone number
2. Find line 68 and update the WhatsApp link:
   ```typescript
   href="https://wa.me/27511234567"  // Your actual number without spaces
   ```

**File to edit:** `components/Locations.tsx`

1. Update the address (around line 75)
2. Update the phone number (around line 98)
3. Update the email address (around line 114)

**Pro tip:** Use "Find & Replace" in VS Code
- Press Ctrl+H (Windows) or Cmd+H (Mac)
- Type the old phone number in "Find"
- Type the new phone number in "Replace"
- Click "Replace All"
- This updates all instances at once!

### Step 9: Customize Colors (Optional)

Want to change the color scheme? Here's how:

**File to edit:** `tailwind.config.ts`

1. Open this file
2. You'll see the color definitions starting at line 11:
   ```typescript
   charcoal: {
     DEFAULT: '#2C2C2C',
     dark: '#1A1A1A',
     light: '#404040',
   },
   ```
3. Change the hex codes to your preferred colors
4. Use a color picker like https://coolors.co to find hex codes

**Colors currently used:**
- **Charcoal**: Main dark color for backgrounds and text
- **Beige**: Warm, comforting accent sections
- **Gold**: Call-to-action buttons and highlights
- **Cream**: Light backgrounds

**Important:** Keep the color names the same (charcoal, beige, gold), just change the hex codes.

### Step 10: Add Your Logo

**What you need:**
- Your logo as a PNG or SVG file
- Recommended size: 200-300px wide

**Steps:**
1. Put your logo file in the `public` folder
2. Name it something simple like `logo.png`
3. Open `components/Navigation.tsx`
4. Find line 45-49 (the logo section)
5. Replace it with:
   ```typescript
   <Image
     src="/logo.png"
     alt="Your Company Name"
     width={200}
     height={80}
     className="h-12 w-auto"
   />
   ```
6. You'll need to import Image at the top:
   ```typescript
   import Image from 'next/image'
   ```
7. Do the same in `components/Footer.tsx` around line 13

### Step 11: Replace Background Image

The hero section uses a placeholder. Let's add a real image.

**What you need:**
- A high-quality image (1920px wide minimum)
- Something peaceful: sunset, landscape, flowers
- Save it in the `public` folder as `hero-bg.jpg`

**File to edit:** `components/Hero.tsx`

1. Find line 22 (the background div)
2. Replace the whole div with:
   ```typescript
   <Image
     src="/hero-bg.jpg"
     alt=""
     fill
     className="object-cover"
     priority
   />
   ```
3. Add the import at the top:
   ```typescript
   import Image from 'next/image'
   ```

---

## Phase 4: Content Updates (30-60 Minutes)

### Step 12: Update Services

**File to edit:** `components/Services.tsx`

1. Starting at line 8, you'll see the services array
2. Each service has:
   - `icon`: The visual symbol (keep these or choose others from Lucide)
   - `title`: Service name
   - `description`: What you offer
3. Edit the text to match your actual services
4. Add or remove services by copying/pasting the whole block

**Example:**
```typescript
{
  icon: Heart,
  title: 'Traditional Burials',
  description: 'Respectful burial services honoring your cultural and religious traditions. We handle all arrangements with care.',
},
```

### Step 13: Update Testimonials

**File to edit:** `components/Testimonials.tsx`

1. Starting at line 6, you'll see the testimonials array
2. Replace with real testimonials from your clients
3. **Important:** Always ask for permission before using someone's words
4. Only use initials for privacy

**Format:**
```typescript
{
  quote: "The actual quote from your client",
  author: "Initial + Last Name",
  year: "2024",
  initials: "TM",
},
```

### Step 14: Update "Why Choose Us" Section

**File to edit:** `components/WhyChooseUs.tsx`

1. Starting at line 8, update the three main reasons
2. Make sure they're honest and specific to your business
3. These should be your actual competitive advantages

### Step 15: Update Stats

**File to edit:** `components/TrustIndicators.tsx`

1. Find line 48 (the stats array)
2. Update with your real numbers:
   ```typescript
   { icon: Award, value: 25, suffix: '+', label: 'Years of Service' },
   ```
3. Only use numbers you can actually back up!

---

## Phase 5: Advanced Customizations (Optional)

### Step 16: Change Fonts

Want different fonts?

1. Go to https://fonts.google.com
2. Find two fonts you like:
   - One for headings (decorative)
   - One for body text (readable)
3. Open `app/layout.tsx`
4. Update the imports:
   ```typescript
   import { Your_Heading_Font, Your_Body_Font } from 'next/font/google'
   ```
5. Update the font configurations (follow the existing pattern)
6. Save and check how it looks

### Step 17: Add More Sections

Want to add a new section? Here's the pattern:

1. Create a new file in `components` folder
2. Name it something like `NewSection.tsx`
3. Copy the structure from an existing component
4. Update the content
5. Add it to `app/page.tsx`:
   ```typescript
   import NewSection from '@/components/NewSection'
   // ... in the return statement:
   <NewSection />
   ```

### Step 18: Customize Animations

**File to edit:** Any component file

Look for `motion.div` elements. You can adjust:
- **duration**: How long the animation takes (in seconds)
- **delay**: When it starts (in seconds)
- **initial**: Starting state
- **animate**: Ending state

**Example:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}  // Starts invisible, 50px down
  whileInView={{ opacity: 1, y: 0 }}  // Becomes visible, moves to original position
  transition={{ duration: 0.7, delay: 0.2 }}  // Takes 0.7s, starts after 0.2s
>
```

Play around with these numbers to get the feel you want!

---

## Phase 6: Building for Production (When You're Ready)

### Step 19: Build the Production Version

When you're done with changes and ready to launch:

1. Stop the development server (Ctrl+C in terminal)
2. Run:
   ```bash
   npm run build
   ```
3. This creates an optimized version of your site
4. It checks for errors and optimizes everything
5. Takes about 1-2 minutes

**If you see errors:**
- Read them carefully
- They usually tell you exactly what's wrong
- Fix the issues and run `npm run build` again

### Step 20: Test the Production Build

Want to see how it'll look when live?

```bash
npm run start
```

This runs the production version locally. Check that everything works perfectly.

---

## Phase 7: Deployment (Going Live)

### Option A: Deploy to Vercel (Easiest, Recommended)

**What is Vercel?**
- The company that made Next.js
- Free hosting for personal projects
- Super fast and reliable
- Takes 5 minutes to set up

**Steps:**

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com
   - Sign up for free

2. **Create a repository:**
   - Click the "+" icon → "New repository"
   - Name it "funeral-website"
   - Make it public or private (your choice)
   - Don't initialize with anything
   - Click "Create repository"

3. **Upload your code:**
   - In VS Code terminal, run these commands one by one:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/funeral-website.git
     git push -u origin main
     ```
   - Replace YOUR-USERNAME with your actual GitHub username

4. **Deploy with Vercel:**
   - Go to https://vercel.com
   - Click "Sign Up" and use your GitHub account
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Wait 2-3 minutes

**That's it!** Your site is live. Vercel gives you a URL like:
```
https://funeral-website-yourname.vercel.app
```

Every time you push changes to GitHub, Vercel automatically updates your live site.

### Option B: Deploy to Netlify

Similar to Vercel:
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"

### Option C: Traditional Hosting

If you want to use your existing hosting:
1. Run `npm run build`
2. Upload the `.next` folder to your server
3. Set up Node.js on your server
4. Run `npm start`

(This is more complex - ask your hosting provider for help with Node.js apps)

---

## Maintenance & Updates

### Regular Updates

**Every few weeks:**
1. Open terminal in your project
2. Run:
   ```bash
   npm update
   ```
3. This updates all packages to their latest versions
4. Test your site to make sure nothing broke

### Adding New Testimonials

1. Open `components/Testimonials.tsx`
2. Add a new object to the array
3. Save and push to GitHub (if using Vercel/Netlify, it auto-deploys)

### Updating Content

Any text changes:
1. Find the component file
2. Edit the text
3. Save
4. If using Vercel/Netlify:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
5. Your site updates automatically in 1-2 minutes

---

## Troubleshooting Common Issues

### "npm is not recognized"
- Node.js isn't installed or not in your PATH
- Reinstall Node.js and restart your computer

### "Port 3000 already in use"
- Another app is using that port
- Run: `npx kill-port 3000`
- Or use a different port: `npm run dev -- -p 3001`

### "Module not found"
- Run `npm install` again
- Make sure you're in the correct folder

### Site looks broken
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check the browser console for errors (F12)
- Make sure you didn't accidentally delete any important code

### Animations not working
- Make sure you have `'use client'` at the top of the component
- Check that framer-motion is installed: `npm list framer-motion`

### Changes not showing up
- Hard refresh your browser (Ctrl+Shift+R)
- Make sure you saved the file
- Check the terminal for error messages

---

## Getting Help

**Need more help?**

1. **Check the error message** - They're usually pretty clear about what's wrong
2. **Google the error** - Copy/paste it into Google
3. **Next.js Documentation** - https://nextjs.org/docs
4. **Tailwind Documentation** - https://tailwindcss.com/docs
5. **Framer Motion Docs** - https://www.framer.com/motion/

**Common searches:**
- "Next.js how to [what you want to do]"
- "Tailwind CSS [the style you want]"
- "Framer Motion [animation type]"

---

## Project Structure Explained

Here's what each folder/file does:

```
funeral-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Overall site layout, fonts, metadata
│   ├── page.tsx           # Homepage (imports all components)
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Top navigation bar
│   ├── Hero.tsx          # Main hero section
│   ├── ImmediateHelp.tsx # Contact form section
│   ├── Services.tsx      # Services cards
│   ├── TrustIndicators.tsx # Stats with animations
│   ├── WhyChooseUs.tsx   # Three reasons section
│   ├── Testimonials.tsx  # Client reviews
│   ├── Locations.tsx     # Contact and map
│   ├── Footer.tsx        # Bottom footer
│   └── ScrollProgress.tsx # Top progress bar
├── lib/
│   └── utils.ts          # Helper functions
├── public/               # Static files (images, etc.)
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind customization
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

---

## Next Steps

1. ✅ Get the site running locally
2. ✅ Update all contact information
3. ✅ Replace placeholder content
4. ✅ Add your images and logo
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel/Netlify
7. 🔜 Connect a custom domain
8. 🔜 Add Google Analytics
9. 🔜 Set up contact form backend
10. 🔜 Add more pages if needed

---

## Final Tips

**Before launching:**
- ✅ Test every link
- ✅ Call your phone number to make sure it works
- ✅ Test the contact form
- ✅ Check on iPhone and Android
- ✅ Ask someone else to review it
- ✅ Check spelling and grammar everywhere
- ✅ Make sure all images load fast
- ✅ Test in different browsers (Chrome, Safari, Firefox)

**For SEO:**
- Use real client testimonials
- Update all meta descriptions
- Add alt text to images
- Make sure content is keyword-rich but natural
- Get your site listed on Google My Business

---

## You're All Set! 🎉

You now have a professional, modern funeral website that:
- ✅ Looks premium and trustworthy
- ✅ Works perfectly on mobile
- ✅ Has smooth, professional animations
- ✅ Loads super fast
- ✅ Is easy for families to navigate
- ✅ Makes it easy to contact you 24/7

Remember: The most important thing is that families can easily find help when they need it. Keep that phone number visible, keep the message clear and compassionate, and you're good to go.

Good luck with your website! 🚀
