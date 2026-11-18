<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark"><meta name="theme-color" content="#0b0720">
<title>Create Your HelzerX Account</title>
<link rel="stylesheet" href="/extensions/nebula/libraries/helzerxRegister.css?v=6">
</head>
<body class="hx-register-page">
<main class="hx-auth-shell">
<aside class="hx-visual-panel" aria-label="HelzerX introduction">
<a class="hx-brand" href="/">
<span class="hx-brand-mark" aria-hidden="true">HX</span>
<span class="hx-brand-name">HELZERX<small>TECHNOLOGIES</small></span>
</a>
<div class="hx-orb hx-orb-one" aria-hidden="true"></div>
<div class="hx-orb hx-orb-two" aria-hidden="true"></div>
<div class="hx-orb hx-orb-three" aria-hidden="true"></div>
<div class="hx-glow" aria-hidden="true"></div>
<div class="hx-visual-lower">
<div class="hx-visual-copy">
<h2><span>Power your world.</span><strong>Manage with confidence.</strong></h2>
<p>Your servers, your community, your control — all in one place.</p>
</div>
<div class="hx-trust">
<span class="hx-avatar" aria-hidden="true">HX</span>
<div>
<p class="hx-quote">“Secure server management, built for your community.”</p>
<p class="hx-cite">— HelzerX Panel</p>
</div>
</div>
</div>
</aside>
<section class="hx-form-panel">
<div class="hx-form-inner">
<div class="hx-mobile-brand">
<a class="hx-brand" href="/">
<span class="hx-brand-mark" aria-hidden="true">HX</span>
<span class="hx-brand-name">HELZERX<small>TECHNOLOGIES</small></span>
</a>
</div>
<header class="hx-form-heading">
<h1>Create Your Account</h1>
<p>Join HelzerX — it’s free to get started.</p>
</header>
@if(session('registration_success'))<div class="hx-alert hx-success" role="status">Your account was created successfully. <a href="/auth/login">Sign in now</a></div>@endif
@if($errors->any())<div class="hx-alert hx-error" role="alert"><strong>Please correct the following:</strong><ul>@foreach($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div>@endif
<form method="POST" action="/auth/register" autocomplete="on">@csrf
<div class="hx-name-grid">
<label class="hx-field"><span>First name</span><input name="first_name" type="text" value="{{ old('first_name') }}" autocomplete="given-name" maxlength="191" placeholder="Your first name" required></label>
<label class="hx-field"><span>Last name</span><input name="last_name" type="text" value="{{ old('last_name') }}" autocomplete="family-name" maxlength="191" placeholder="Your last name" required></label>
</div>
<label class="hx-field"><span>Email address</span><input name="email" type="email" value="{{ old('email') }}" autocomplete="email" maxlength="191" placeholder="you@example.com" required></label>
<label class="hx-field"><span>Confirm email address</span><input name="email_confirmation" type="email" value="{{ old('email_confirmation') }}" autocomplete="email" maxlength="191" placeholder="Enter your email again" required></label>
<label class="hx-field"><span>Password</span><input name="password" type="password" autocomplete="new-password" minlength="8" placeholder="Create a password" required><small>Use at least 8 characters, including uppercase, lowercase and a number.</small></label>
<label class="hx-field"><span>Confirm password</span><input name="password_confirmation" type="password" autocomplete="new-password" minlength="8" placeholder="Enter your password again" required></label>
<fieldset class="hx-experience"><legend>Experience level</legend><div class="hx-choice-grid">
<label><input type="radio" name="experience" value="beginner" {{ old('experience', 'beginner') === 'beginner' ? 'checked' : '' }} required> Beginner</label>
<label><input type="radio" name="experience" value="intermediate" {{ old('experience') === 'intermediate' ? 'checked' : '' }}> Intermediate</label>
<label><input type="radio" name="experience" value="advanced" {{ old('experience') === 'advanced' ? 'checked' : '' }}> Advanced</label>
</div></fieldset>
<div class="hx-honeypot" aria-hidden="true"><label>Leave empty<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<label class="hx-terms"><input type="checkbox" name="terms" value="1" {{ old('terms') ? 'checked' : '' }} required><span>I agree to the <a href="https://www.helzerx.cyou/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://www.helzerx.cyou/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span></label>
<button class="hx-submit" type="submit">Create Account</button>
</form>
<p class="hx-login-prompt">Already have an account? <a href="/auth/login">Log in</a></p>
<p class="hx-footnote">Secure registration · Standard user account</p>
</div>
</section>
</main>
</body></html>
