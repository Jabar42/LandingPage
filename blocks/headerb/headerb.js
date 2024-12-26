
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender3,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'landingpage/headerb', {
        apiVersion: 2,
        title: 'headerb',
        description: '',
        icon: 'block-default',
        category: 'my_category',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-gray-50 border-slate-50 relative text-gray-500' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container mx-auto px-4 py-20' }, [' ', ' ', el('div', { className: '-mx-4 flex flex-wrap items-end' }, [' ', ' ', el('div', { className: 'px-4 w-full lg:w-2/3' }, [' ', ' ', el('div', { className: 'mb-4' }, [' ', el('img', { src: (pg_project_data_landingpage ? pg_project_data_landingpage.url : '') + 'img/actovia-logo.webp' }), ' ']), ' ', el('h1', { className: 'font-bold font-serif mb-4 text-6xl text-gray-800', style: { fontFamily: '\'Poppins\', sans-serif',fontWeight: '700',fontSize: '40px' } }, 'Stay Ahead with the Latest CRE Transactions.'), ' ', ' ', el('p', { className: 'font-light leading-tight mb-6 text-xl', style: { fontFamily: '\'Poppins\', sans-serif',fontSize: '18px' } }, 'Get daily updates on the latest CRE transactions—including sales and refinances—delivered straight to your inbox.'), ' ', el('img', { src: (pg_project_data_landingpage ? pg_project_data_landingpage.url : '') + 'img/list.webp', style: { borderTop: '20px solid #000000',borderRight: '20px solid #000000',borderTopRightRadius: '20px' } }), ' ', ' ']), ' ', ' ', el('div', { className: 'px-4 w-full lg:w-1/3' }, [' ', ' ', el('div', { className: 'bg-white mb-0 p-4 rounded-xl shadow-xl' }, [' ', el('form', {}, [' ', el('h4', { style: { fontFamily: '\'Poppins\', sans-serif',fontSize: '20px' }, className: 'font-bold leading-6' }, 'Free for a limited time. Don’t miss out—subscribe now!'), ' ', el('div', { className: 'flex my-4 text-sm' }, [el('span', { className: 'bg-gray-50 border border-gray-300 border-r-0 inline-flex items-center px-3 py-2 rounded-l-md text-gray-600' }, el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor', width: '16', height: '16' }, [' ', el('g', {}, [' ', el('path', { fill: 'none', d: 'M0 0h24v24H0z' }), ' ', el('path', { d: 'M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z' }), ' ']), ' '])), ' ', el('input', { type: 'email', className: 'block border border-gray-300 flex-1 px-3 py-2 rounded-r-md w-full hover:bg-blue-50', placeholder: 'Email', 'aria-label': 'Email', 'required': '' }), ' ']), ' ', el('p', { style: { fontFamily: '\'Poppins\', sans-serif',fontWeight: '700',fontSize: '16px' } }, 'How would you like to be updated? (Required)'), el('div', {}, [el('div', { className: 'border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50' }, [' ', el('input', { id: 'remember_me', name: 'remember_me', type: 'checkbox', className: 'border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500' }), ' ', el('label', { htmlFor: 'Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. ', style: { fontFamily: '\'Poppins\', sans-serif',fontSize: '16px' }, className: 'px-3 py-0' }, 'Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day.'), ' ', ' ']), el('div', { className: 'border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50' }, [' ', el('input', { id: 'remember_me', name: 'remember_me', type: 'checkbox', className: 'border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500' }), ' ', el('label', { htmlFor: 'Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. ', style: { fontFamily: '\'Poppins\', sans-serif',fontSize: '16px' }, className: 'px-3 py-0' }, 'Daily Summary: Receive yesterday\'s NYC deals every morning.'), ' ', ' ']), el('div', { className: 'border flex items-start mt-4 p-3 rounded-xl hover:bg-blue-50' }, [' ', el('input', { id: 'remember_me', name: 'remember_me', type: 'checkbox', className: 'border-gray-300 h-4 mt-1 rounded text-indigo-600 w-4 focus:ring-indigo-500' }), ' ', el('label', { htmlFor: 'Real-Time Updates (3x/day): Get real-time updates on the latest NYC transactions throughout the day. ', style: { fontFamily: '\'Poppins\', sans-serif',fontSize: '16px' }, className: 'px-3 py-0' }, 'Weekly Roundup: A comprehensive summary of all US transactions.'), ' ', ' '])]), el('button', { type: 'submit', className: 'font-medium inline-block mt-4 px-6 py-2 rounded-md text-center text-white w-full hover:bg-blue-700', style: { backgroundColor: '#bf5340' } }, 'Sign In'), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
            ]);
        },

        save: function(props) {
            return null;
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
