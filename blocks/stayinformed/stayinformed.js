
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
    
    const block = registerBlockType( 'landingpage/stayinformed', {
        apiVersion: 2,
        title: 'Stay Informed',
        description: '',
        icon: 'block-default',
        category: 'my_category',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-gray-50 py-20 text-gray-500' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container mx-auto px-4 relative' }, [' ', ' ', el('div', { className: 'flex flex-wrap -mx-4 items-center mb-4' }, [' ', ' ', el('div', { className: 'px-4 w-full' }, [' ', ' ', el('h2', { className: 'font-medium mb-1 text-blue-600' }, 'Services'), ' ', ' ', el('h3', { className: 'font-bold leading-tight mb-1 text-3xl text-gray-900' }, 'Stay informed. Spot opportunities. Close more deals.'), ' ', ' ', el('p', { className: 'mb-4' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.'), ' ', ' ']), ' ', ' ', ' ', ' ']), ' ', ' ', el('div', { className: 'flex flex-wrap -mx-4' }, [' ', ' ', el('div', { className: 'w-full p-4  xl:w-3/12 sm:w-6/12' }, [' ', el('a', { href: '#', className: 'bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg' }, [' ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10', fill: 'currentColor' }, [' ', ' ', el('path', { d: 'M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z' }), ' ', ' ']), el('h4', { className: 'font-bold group-hover:text-white mb-2 text-gray-900 text-xl' }, ' Development '), ' ', el('p', {}, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. '), ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'w-full p-4  xl:w-3/12 sm:w-6/12' }, [' ', el('a', { href: '#', className: 'bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg' }, [' ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10', fill: 'currentColor' }, [' ', ' ', el('path', { d: 'M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z' }), ' ', ' ']), el('h4', { className: 'font-bold group-hover:text-white mb-2 text-gray-900 text-xl' }, ' Product Design '), ' ', el('p', {}, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. '), ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'w-full p-4  xl:w-3/12 sm:w-6/12' }, [' ', el('a', { href: '#', className: 'bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg' }, [' ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10', fill: 'currentColor' }, [' ', ' ', el('path', { d: 'M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z' }), ' ', ' ']), el('h4', { className: 'font-bold group-hover:text-white mb-2 text-gray-900 text-xl' }, ' UI/UX Research '), ' ', el('p', {}, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. '), ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'w-full p-4  xl:w-3/12 sm:w-6/12' }, [' ', el('a', { href: '#', className: 'bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg' }, [' ', el('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24', className: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10' }, [' ', ' ', el('path', { d: 'M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z' }), ' ', ' ']), ' ', el('h4', { className: 'font-bold group-hover:text-white mb-2 text-gray-900 text-xl' }, ' Digital Marketing '), ' ', el('p', {}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.'), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
