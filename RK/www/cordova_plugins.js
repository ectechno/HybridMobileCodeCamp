
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>phonegap-2-style-3/cordova_plugins.js at master · phonegap/phonegap-2-style-3 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="phonegap/phonegap-2-style-3" name="twitter:title" /><meta content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/60365?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/60365?v=3&amp;s=400" property="og:image" /><meta content="phonegap/phonegap-2-style-3" property="og:title" /><meta content="https://github.com/phonegap/phonegap-2-style-3" property="og:url" /><meta content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="67F7333F:0A7D:9BA4466:55C039C7" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="LE50n2SOSYQ8P0kk0cp50ceN9OakKADRnmW2SBaII+I7+GrhWUGw2QV6hsJrr8fW8rW/koliu7vmDXYfVz13GQ==" name="csrf-token" />
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-c7126cd67871e693a9f863b7a0e99879ca39079b15a8784f8b543c03bf14ad72.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-87247f16e6450ef54cb0eda3f8f1484e33a3f18c7a7d3df1f76f67cba36a8d6d.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="5d3cb7c96fe3e48c3c2703bd7d16a1c1">

      
  <meta name="description" content="phonegap-2-style-3 - PhoneGap 3.0 project that includes all of the plugins by default">
  <meta name="go-import" content="github.com/phonegap/phonegap-2-style-3 git https://github.com/phonegap/phonegap-2-style-3.git">

  <meta content="60365" name="octolytics-dimension-user_id" /><meta content="phonegap" name="octolytics-dimension-user_login" /><meta content="11325061" name="octolytics-dimension-repository_id" /><meta content="phonegap/phonegap-2-style-3" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11325061" name="octolytics-dimension-repository_network_root_id" /><meta content="phonegap/phonegap-2-style-3" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/phonegap/phonegap-2-style-3/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-2-style-3:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fphonegap%2Fphonegap-2-style-3%2Fblob%2Fmaster%2Fplatforms%2Fandroid%2Fassets%2Fwww%2Fcordova_plugins.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/phonegap/phonegap-2-style-3/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/phonegap/phonegap-2-style-3/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu ">
      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fphonegap%2Fphonegap-2-style-3"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/phonegap/phonegap-2-style-3/watchers">
    24
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fphonegap%2Fphonegap-2-style-3"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/phonegap/phonegap-2-style-3/stargazers">
      38
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fphonegap%2Fphonegap-2-style-3"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/phonegap/phonegap-2-style-3/network" class="social-count">
        72
      </a>
    </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
            <span class="mega-octicon octicon-repo"></span>
            <span class="author"><a href="/phonegap" class="url fn" itemprop="url" rel="author"><span itemprop="title">phonegap</span></a></span><!--
         --><span class="path-divider">/</span><!--
         --><strong><a href="/phonegap/phonegap-2-style-3" data-pjax="#js-repo-pjax-container">phonegap-2-style-3</a></strong>

            <span class="page-context-loader">
              <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
            </span>

          </h1>
        </div>

      </div>
    </div>

      <div class="container">
        <div class="repository-with-sidebar repo-container new-discussion-timeline ">
          <div class="repository-sidebar clearfix">
              

<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/phonegap/phonegap-2-style-3/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/phonegap/phonegap-2-style-3" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /phonegap/phonegap-2-style-3">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/phonegap/phonegap-2-style-3/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /phonegap/phonegap-2-style-3/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/phonegap/phonegap-2-style-3/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /phonegap/phonegap-2-style-3/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/phonegap/phonegap-2-style-3/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /phonegap/phonegap-2-style-3/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/phonegap/phonegap-2-style-3/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /phonegap/phonegap-2-style-3/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

                <div class="only-with-full-nav">
                    
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/phonegap/phonegap-2-style-3.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/phonegap/phonegap-2-style-3" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



  <div class="clone-options">You can clone with
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="985ffad1d839c4ab64e5f5836d348a847a704177" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YAcnHjTsUKYFrfWEbLoaMXbLodn9dC14hGh1TOU+jlno3dUe+ZmriowFR/nrSS5RaFICl/SLNg8Bmqf6HGyUSg==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="985ffad1d839c4ab64e5f5836d348a847a704177" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jbTRQI8dCusHlXWcxH4GTH4ioEi92qDhve82i2Z0BkveqL/ym6YdHz5wwlSC5SP1DBMt6tlRYVD2KP9oQMoxFg==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
    <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
      <span class="octicon octicon-question"></span>
    </a>
  </div>
    <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save phonegap/phonegap-2-style-3 to your computer and use it in GitHub Desktop." aria-label="Save phonegap/phonegap-2-style-3 to your computer and use it in GitHub Desktop.">
      <span class="octicon octicon-device-desktop"></span>
      Clone in Desktop
    </a>

                  <a href="/phonegap/phonegap-2-style-3/archive/master.zip"
                     class="btn btn-sm sidebar-button"
                     aria-label="Download the contents of phonegap/phonegap-2-style-3 as a zip file"
                     title="Download the contents of phonegap/phonegap-2-style-3 as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>
                </div>
          </div>
          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

            

<a href="/phonegap/phonegap-2-style-3/blob/8d2063dc4e57fce221d3784bf5c9f3a411343699/platforms/android/assets/www/cordova_plugins.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8bc43f0cd3d161c7b970181633935938 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/phonegap/phonegap-2-style-3/blob/master/platforms/android/assets/www/cordova_plugins.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/phonegap/phonegap-2-style-3/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">phonegap-2-style-3</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">platforms</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">android</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android/assets" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-2-style-3/tree/master/platforms/android/assets/www" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator">/</span><strong class="final-path">cordova_plugins.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@stevengill" class="avatar" height="24" src="https://avatars2.githubusercontent.com/u/169536?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/stevengill" rel="contributor">stevengill</a></span>
        <time datetime="2013-07-11T00:06:48Z" is="relative-time">Jul 10, 2013</time>
        <div class="commit-title">
            <a href="/phonegap/phonegap-2-style-3/commit/c372f70a93c7fc4f98bd813c1b00504d4bb59f90" class="message" data-pjax="true" title="added ios and android project with all plugins installed">added ios and android project with all plugins installed</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@stevengill" height="24" src="https://avatars2.githubusercontent.com/u/169536?v=3&amp;s=48" width="24" />
            <a href="/stevengill">stevengill</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/phonegap/phonegap-2-style-3/raw/master/platforms/android/assets/www/cordova_plugins.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/phonegap/phonegap-2-style-3/blame/master/platforms/android/assets/www/cordova_plugins.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/phonegap/phonegap-2-style-3/commits/master/platforms/android/assets/www/cordova_plugins.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        3 lines (3 sloc)
        <span class="file-info-divider"></span>
      9.755 kB
    </div>
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">cordova.define(<span class="pl-s"><span class="pl-pds">&#39;</span>cordova/plugin_list<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">require</span>, <span class="pl-smi">exports</span>, <span class="pl-smi">module</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">module.exports = [{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.AudioHandler/www/MediaError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.AudioHandler.MediaError&quot;,&quot;clobbers&quot;:[&quot;window.MediaError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.AudioHandler/www/Media.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.AudioHandler.Media&quot;,&quot;clobbers&quot;:[&quot;window.Media&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.battery-status/www/battery.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.battery-status.battery&quot;,&quot;clobbers&quot;:[&quot;navigator.battery&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.camera/www/CameraConstants.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.camera.Camera&quot;,&quot;clobbers&quot;:[&quot;Camera&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.camera/www/CameraPopoverOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.camera.CameraPopoverOptions&quot;,&quot;clobbers&quot;:[&quot;CameraPopoverOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.camera/www/Camera.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.camera.camera&quot;,&quot;clobbers&quot;:[&quot;navigator.camera&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.camera/www/CameraPopoverHandle.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.camera.CameraPopoverHandle&quot;,&quot;clobbers&quot;:[&quot;CameraPopoverHandle&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/contacts.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.contacts&quot;,&quot;clobbers&quot;:[&quot;navigator.contacts&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/Contact.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.Contact&quot;,&quot;clobbers&quot;:[&quot;Contact&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactAddress.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactAddress&quot;,&quot;clobbers&quot;:[&quot;ContactAddress&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactError&quot;,&quot;clobbers&quot;:[&quot;ContactError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactField.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactField&quot;,&quot;clobbers&quot;:[&quot;ContactField&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactFindOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactFindOptions&quot;,&quot;clobbers&quot;:[&quot;ContactFindOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactName.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactName&quot;,&quot;clobbers&quot;:[&quot;ContactName&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.contacts/www/ContactOrganization.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.contacts.ContactOrganization&quot;,&quot;clobbers&quot;:[&quot;ContactOrganization&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device/www/device.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device.device&quot;,&quot;clobbers&quot;:[&quot;device&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device-motion/www/Acceleration.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device-motion.Acceleration&quot;,&quot;clobbers&quot;:[&quot;Acceleration&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device-motion/www/accelerometer.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device-motion.accelerometer&quot;,&quot;clobbers&quot;:[&quot;navigator.accelerometer&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device-orientation/www/CompassError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device-orientation.CompassError&quot;,&quot;clobbers&quot;:[&quot;CompassError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device-orientation/www/CompassHeading.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device-orientation.CompassHeading&quot;,&quot;clobbers&quot;:[&quot;CompassHeading&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.device-orientation/www/compass.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.device-orientation.compass&quot;,&quot;clobbers&quot;:[&quot;navigator.compass&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.dialogs/www/notification.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.dialogs.notification&quot;,&quot;merges&quot;:[&quot;navigator.notification&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.dialogs/www/android/notification.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.dialogs.notification_android&quot;,&quot;merges&quot;:[&quot;navigator.notification&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/DirectoryEntry.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.DirectoryEntry&quot;,&quot;clobbers&quot;:[&quot;window.DirectoryEntry&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/DirectoryReader.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.DirectoryReader&quot;,&quot;clobbers&quot;:[&quot;window.DirectoryReader&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/Entry.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.Entry&quot;,&quot;clobbers&quot;:[&quot;window.Entry&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/File.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.File&quot;,&quot;clobbers&quot;:[&quot;window.File&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileEntry.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileEntry&quot;,&quot;clobbers&quot;:[&quot;window.FileEntry&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileError&quot;,&quot;clobbers&quot;:[&quot;window.FileError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileReader.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileReader&quot;,&quot;clobbers&quot;:[&quot;window.FileReader&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileSystem.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileSystem&quot;,&quot;clobbers&quot;:[&quot;window.FileSystem&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileUploadOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileUploadOptions&quot;,&quot;clobbers&quot;:[&quot;window.FileUploadOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileUploadResult.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileUploadResult&quot;,&quot;clobbers&quot;:[&quot;window.FileUploadResult&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/FileWriter.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.FileWriter&quot;,&quot;clobbers&quot;:[&quot;window.FileWriter&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/Flags.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.Flags&quot;,&quot;clobbers&quot;:[&quot;window.Flags&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/LocalFileSystem.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.LocalFileSystem&quot;,&quot;clobbers&quot;:[&quot;window.LocalFileSystem&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/Metadata.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.Metadata&quot;,&quot;clobbers&quot;:[&quot;window.Metadata&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/ProgressEvent.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.ProgressEvent&quot;,&quot;clobbers&quot;:[&quot;window.ProgressEvent&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/requestFileSystem.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.requestFileSystem&quot;,&quot;clobbers&quot;:[&quot;window.requestFileSystem&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file/www/resolveLocalFileSystemURI.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file.resolveLocalFileSystemURI&quot;,&quot;clobbers&quot;:[&quot;window.resolveLocalFileSystemURI&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file-transfer/www/FileTransferError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file-transfer.FileTransferError&quot;,&quot;clobbers&quot;:[&quot;window.FileTransferError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.file-transfer/www/FileTransfer.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.file-transfer.FileTransfer&quot;,&quot;clobbers&quot;:[&quot;window.FileTransfer&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.geolocation/www/Coordinates.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.geolocation.Coordinates&quot;,&quot;clobbers&quot;:[&quot;Coordinates&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.geolocation/www/PositionError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.geolocation.PositionError&quot;,&quot;clobbers&quot;:[&quot;PositionError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.geolocation/www/Position.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.geolocation.Position&quot;,&quot;clobbers&quot;:[&quot;Position&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.geolocation/www/geolocation.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.geolocation.geolocation&quot;,&quot;clobbers&quot;:[&quot;navigator.geolocation&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.globalization/www/GlobalizationError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.globalization.GlobalizationError&quot;,&quot;clobbers&quot;:[&quot;window.GlobalizationError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.globalization/www/globalization.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.globalization.globalization&quot;,&quot;clobbers&quot;:[&quot;navigator.globalization&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.inappbrowser/www/InAppBrowser.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.inappbrowser.InAppBrowser&quot;,&quot;clobbers&quot;:[&quot;window.open&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureAudioOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.CaptureAudioOptions&quot;,&quot;clobbers&quot;:[&quot;CaptureAudioOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureImageOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.CaptureImageOptions&quot;,&quot;clobbers&quot;:[&quot;CaptureImageOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureVideoOptions.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.CaptureVideoOptions&quot;,&quot;clobbers&quot;:[&quot;CaptureVideoOptions&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/CaptureError.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.CaptureError&quot;,&quot;clobbers&quot;:[&quot;CaptureError&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/MediaFileData.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.MediaFileData&quot;,&quot;clobbers&quot;:[&quot;MediaFileData&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/MediaFile.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.MediaFile&quot;,&quot;clobbers&quot;:[&quot;MediaFile&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.media-capture/www/capture.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.media-capture.capture&quot;,&quot;clobbers&quot;:[&quot;navigator.device.capture&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.network-information/www/network.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.network-information.network&quot;,&quot;clobbers&quot;:[&quot;navigator.connection&quot;,&quot;navigator.network.connection&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.network-information/www/Connection.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.network-information.Connection&quot;,&quot;clobbers&quot;:[&quot;Connection&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.splashscreen/www/splashscreen.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.splashscreen.SplashScreen&quot;,&quot;clobbers&quot;:[&quot;navigator.splashscreen&quot;]},{&quot;file&quot;:&quot;plugins/org.apache.cordova.core.vibration/www/vibration.js&quot;,&quot;id&quot;:&quot;org.apache.cordova.core.vibration.notification&quot;,&quot;merges&quot;:[&quot;navigator.notification&quot;]}]</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03500s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" aria-label=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-783bb77b540b7a2867011519a322b2b7427e8cb20e4ea9936b6868b240fccdc5.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-5e7d8e39101d627e89721230a3c433b3c92a4f00a921033e5c18796310da63c2.js"></script>
      
      
  </body>
</html>

