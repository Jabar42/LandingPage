<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "bg-gray-50 border-slate-50 relative text-gray-500", ) ); else echo 'data-wp-block-props="true"'; ?>> 
    <div class="container mx-auto px-4 py-20"> 
        <div class="-mx-4 flex flex-wrap items-end"> 
            <div class="px-4 w-full lg:w-2/3"> 
                <div class="mb-4">
                    <img src="<?php echo landingpage_plugin_base_url(); ?>/img/actovia-logo.webp">
                </div>
                <h1 class="font-bold font-serif mb-4 text-6xl text-gray-800" style="font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 40px;"><?php _e( 'Stay Ahead with the Latest CRE Transactions.', 'landingpage' ); ?></h1> 
                <p class="font-light leading-tight mb-6 text-xl" style="font-family: 'Poppins', sans-serif; font-size: 18px;"><?php _e( 'Get daily updates on the latest CRE transactions&mdash;including sales and refinances&mdash;delivered straight to your inbox.', 'landingpage' ); ?></p>
                <img src="<?php echo landingpage_plugin_base_url(); ?>/img/list.webp" style="border-top: 20px solid #000000; border-right: 20px solid #000000; border-top-right-radius: 20px;"> 
            </div>             
            <div class="px-4 w-full lg:w-1/3"> 
                <div class="bg-white mb-0 p-4 rounded-xl shadow-xl">
                    <form>
                        <h4 style="font-family: 'Poppins', sans-serif; font-size: 20px;" class="font-bold leading-6"><?php _e( 'Free for a limited time. Don&rsquo;t miss out&mdash;subscribe now!', 'landingpage' ); ?></h4>
                        <div class="flex my-4 text-sm">
                            <span class="bg-gray-50 border border-gray-300 border-r-0 inline-flex items-center px-3 py-2 rounded-l-md text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                                    </g>
                                </svg></span>
                            <input type="email" class="block border border-gray-300 flex-1 px-3 py-2 rounded-r-md w-full hover:bg-blue-50" placeholder="Email" aria-label="Email" required>
                        </div>
                        <p style="font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 16px;"><?php _e( 'How would you like to be updated?
 (Required)', 'landingpage' ); ?></p>
                        <div>
                            <div class="border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50">
                                <input id="remember_me" name="remember_me" type="checkbox" class="border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500">
                                <label for="Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. " style="font-family: 'Poppins', sans-serif; font-size: 16px;" class="px-3 py-0">
                                    <?php _e( 'Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day.', 'landingpage' ); ?>
                                </label>                                 
                            </div>
                            <div class="border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50">
                                <input id="remember_me" name="remember_me" type="checkbox" class="border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500">
                                <label for="Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. " style="font-family: 'Poppins', sans-serif; font-size: 16px;" class="px-3 py-0">
                                    <?php _e( 'Daily Summary: Receive yesterday&apos;s NYC deals every morning.', 'landingpage' ); ?>
                                </label>                                 
                            </div>
                            <div class="border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50">
                                <input id="remember_me" name="remember_me" type="checkbox" class="border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500">
                                <label for="Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. " style="font-family: 'Poppins', sans-serif; font-size: 16px;" class="px-3 py-0">
                                    <?php _e( 'Weekly Roundup: A comprehensive summary of all US transactions.', 'landingpage' ); ?>
                                </label>                                 
                            </div>
                        </div>
                        <button type="submit" class="font-medium inline-block mt-4 px-6 py-2 rounded-md text-center text-white w-full hover:bg-blue-700" style="background-color: #bf5340;">
                            <?php _e( 'Sign In', 'landingpage' ); ?>
                        </button>
                    </form>                     
                </div>                 
            </div>             
        </div>         
    </div>     
</section>