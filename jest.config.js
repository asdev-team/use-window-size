module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['./jest.setup.ts']
};