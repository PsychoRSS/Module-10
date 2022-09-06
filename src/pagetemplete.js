const generate = ({name,job,email, github}) =>
  `<!DOCTYPE html>     
  <html>
  <head>
      <title>my team</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  </head>
  
  <body>
      <h1 class = "bg-red-500 w=full h-32 flex justify-center text-xl font-bold pt-6">
          My team
      </h1>

      <!-- cards -->
      <div class="grid grid-cols-3 gap-5 place-content-center font-semibold  pt-6 pl-10">
         
          <!-- card 1 -->
          <div id="complete card" class="h-60 w-60 bg-slate-300 rounded-lg font-bold">
              <div id="card header" class="h-16 w-60 bg-sky-600 text-white">    
              <h2 class="ml-4">${name}</h2>
              <h2 class="pt-2 ml-4">${job}</h2>
              </div>

              <div class="h-36 w-40 ml-10">
                  <div class="mt-5">
                      <section class="h-6 w-full bg-sky-500">
                          <p>ID:1</p>
                      </section>
              
                      <section class="h-16 bg-slate-500">
                          <p>email: <span>${email}</span></p>
                      </section>
                      <section class="bg-slate-100">
                          <p>office number:</p>
                      </section>
                  </div>
              </div>
          </div>

          <!-- card 2 -->
          <div id="complete card" class="h-60 w-60 bg-slate-300 rounded-lg font-bold">
              <div id="card header" class="h-16 w-60 bg-sky-600 text-white">    
              <h2 class="ml-4">${name}</h2>
              <h2 class="pt-2 ml-4">${job}</h2>
              </div>

              <div class="h-36 w-40 ml-10">
                  <div class="mt-5">
                      <section class="h-6 w-full bg-sky-500">
                          <p>ID:1</p>
                      </section>
              
                      <section class="h-16 bg-slate-500">
                          <p>email: <span>${email}</span></p>
                      </section>
                      <section class="bg-slate-100">
                          <p>office number:</p>
                      </section>
                  </div>
              </div>
          </div>

           <!-- card 3 -->
           <div id="complete card" class="h-60 w-60 bg-slate-300 rounded-lg font-bold">
              <div id="card header" class="h-16 w-60 bg-sky-600 text-white">    
              <h2 class="ml-4">${name}</h2>
              <h2 class="pt-2 ml-4">${job}</h2>
              </div>

              <div class="h-36 w-40 ml-10">
                  <div class="mt-5">
                      <section class="h-6 w-full bg-sky-500">
                          <p>ID:1</p>
                      </section>
              
                      <section class="h-16 bg-slate-500">
                          <p>email: <span>${email}</span></p>
                      </section>
                      <section class="bg-slate-100">
                          <p>office number:</p>
                      </section>
                  </div>
              </div>
          </div>

          <!-- card 4 -->
          <div id="complete card" class="h-60 w-60 bg-slate-300 rounded-lg font-bold">
              <div id="card header" class="h-16 w-60 bg-sky-600 text-white">    
              <h2 class="ml-4">${name}</h2>
              <h2 class="pt-2 ml-4">${job}</h2>
              </div>

              <div class="h-36 w-40 ml-10">
                  <div class="mt-5">
                      <section class="h-6 w-full bg-sky-500">
                          <p>ID:1</p>
                      </section>
              
                      <section class="h-16 bg-slate-500">
                          <p>email: <span>${email}</span></p>
                      </section>
                      <section class="bg-slate-100">
                          <p>office number:</p>
                      </section>
                  </div>
              </div>
          </div>
        
          <div id="complete card" class="h-60 w-60 bg-slate-300 rounded-lg font-bold">
              <div id="card header" class="h-16 w-60 bg-sky-600 text-white">    
              <h2 class="ml-4">${name}</h2>
              <h2 class="pt-2 ml-4">${job}</h2>
              </div>

              <div class="h-36 w-40 ml-10">
                  <div class="mt-5">
                      <section class="h-6 w-full bg-sky-500">
                          <p>ID:1</p>
                      </section>
              
                      <section class="h-16 bg-slate-500">
                          <p>email: <span>${email}</span></p>
                      </section>
                      <section class="bg-slate-100">
                          <p>office number:</p>
                      </section>
                  </div>
              </div>
          </div>
      </div>
  </body>
  </html>`;
