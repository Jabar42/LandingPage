
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
    
    const block = registerBlockType( 'landingpage/footeractovia', {
        apiVersion: 2,
        title: 'Footer Actovia',
        description: '',
        icon: 'block-default',
        category: 'my_category',
        keywords: [],
        supports: {},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'font-light pt-12 text-gray-300', style: { backgroundColor: '#bf523f' } });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container mx-auto px-4 relative' }, [' ', ' ', el('div', { className: 'flex flex-wrap -mx-4' }, [' ', ' ', el('div', { className: 'w-full p-4 xl:mr-auto' }, [' ', ' ', ' ', el('p', { className: 'mb-4 text-sm' }, 'Actovia is the go-to platform for CRE professionals, providing accurate intelligence on property ownership, mortgages, and market trends across the U.S. Built for brokers, lenders, investors, service providers, and expeditors, the platform offers powerful search tools, detailed mortgage data, and an extensive contact database. Use Actovia to find lucrative opportunities, generate high-quality leads, and close deals faster. With seamless API integrations, custom data delivery, and tailored solutions, Actovia adapts to your unique business needs, ensuring you stay competitive in a fast-paced market. Transform your business with Actovia today! Call us: 732.987.9870 or visit us at actovia.com'), ' ', ' ', el('div', { className: 'mb-6' }, [' ', el('a', { href: '#', className: 'hover:text-blue-600' }, ['+', el('a', { href: '#', className: 'hover:text-blue-600 medium-editor-element', spellCheck: 'false', 'data-medium-editor-element': 'true', role: 'textbox', 'aria-multiline': 'true', 'data-medium-editor-editor-index': '18', 'medium-editor-index': '281f67b4-a12f-4b00-cb4f-8389f54336e0', 'data-placeholder': 'Type your text', 'data-medium-focused': 'true', style: { fontFamily: 'inherit' } }, el('p', { 'data-pm-slice': '1 1 []', style: { display: 'inline !important' } }, '1732-987-9870'))]), ' ', el('br', {}), el('a', { href: '#', className: 'hover:text-blue-600' }, 'hello@fantico.com')]), ' ', ' ', el('div', { className: 'flex-wrap inline-flex space-x-3' }, [' ', el('a', { href: '#', className: 'hover:text-blue-600', 'aria-label': 'facebook' }, [' ', el('svg', { viewBox: '0 0 24 24', fill: 'currentColor', className: 'h-5 w-5' }, [' ', ' ', el('path', { d: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z' }), ' ', ' '])]), ' ', el('a', { href: '#', className: 'hover:text-blue-600', 'aria-label': 'twitter' }, [' ', el('svg', { viewBox: '0 0 24 24', fill: 'currentColor', className: 'h-5 w-5' }, [' ', ' ', el('path', { d: 'M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z' }), ' ', ' '])]), ' ', el('a', { href: '#', className: 'hover:text-blue-600', 'aria-label': 'instagram' }, [' ', el('svg', { viewBox: '0 0 24 24', fill: 'currentColor', className: 'h-5 w-5' }, [' ', ' ', el('path', { d: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' }), ' ', ' '])]), ' ', el('a', { href: '#', className: 'hover:text-blue-600', 'aria-label': 'linkedin' }, [' ', el('svg', { viewBox: '0 0 24 24', fill: 'currentColor', className: 'h-5 w-5' }, [' ', ' ', el('path', { d: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z' }), ' ', ' '])]), ' ', el('a', { href: '#', className: 'hover:text-blue-600', 'aria-label': 'youtube' }, [' ', el('svg', { viewBox: '0 0 24 24', fill: 'currentColor', className: 'h-5 w-5' }, [' ', ' ', el('path', { d: 'M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z' }), ' ', ' '])]), ' ', ' ']), ' ', ' ']), ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']), ' ', ' ', el('div', { className: 'py-4 text-center' }, [' ', ' ', el('hr', { className: 'mb-4 opacity-25' }), ' ', ' ', el('p', { className: 'text-sm' }, 'Copyright © 2024 Actovia'), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
