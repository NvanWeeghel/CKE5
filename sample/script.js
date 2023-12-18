let editor;

ClassicEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
        extraAllowedContent: {
            div: {},
            a: {classes: ['contentTooltip', 'category']},
            img: {attributes: ['id', 'usemap']},
            map: {attributes: ['name']},
            area: {attributes: ['shape', 'coords', 'href', 'target', 'alt', 'title']},
            iframe: {attributes: ['src', 'width', 'height', 'frameborder', 'allowfullscreen']},
            '*': {
                styles: '*',
                attributes: [
                    'lang', 'face', 'border', 'cellspacing', 'cellpadding', 'width', 'valign', 'colspan', 'rowspan', 'align',
                    'size', 'clear', 'name', 'href', 'id', 'type', 'span', 'height', 'color', 'alt', 'src', 'contenteditable',
                    'start', 'target', 'nowrap', 'class', 'value', 'title', 'hspace', 'bordercolor', 'background', 'vspace', 'language',
                ],
            },
        },
        sourceEditingCodeMirror: {
            options: {
                lineWrapping: true,
                lineNumbers: true,
                mode: 'text/html',
            }
        },
	} )
	.then( Neweditor => {
		editor = Neweditor;
	} )
	.catch( handleSampleError );

document.querySelector('#submit').addEventListener('click', () => {
    const data = editor.getData();

    console.log(data);
});

document.querySelector('#tekst').addEventListener('click', () => {
    editor.setData(document.querySelector('#input').value);
    document.querySelector('#input').value = '';
});

document.querySelector('#submit2').addEventListener('click', () => {
    editor.setData(editor.getData());
});

document.querySelector('#escaped').addEventListener('click', () => {
    const data = editor.getData();
    //replace ' with \'
    console.log(data.replace(/'/g, "\\'"));

});



function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "ts7zs7z4guq4-x7p5lpdi0dj2" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
